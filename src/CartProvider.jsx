import React, { useState, useEffect } from 'react'
import { CartContext } from './CartContext';



function CartProvider({ children }) {
    const [cartArr, setCartArr] = useState([]);
    const [cartEmpty, setCartEmpty] = useState(true)
    const [cartCount, setCartCount] = useState([])
    const [cartTotal, setCartTotal] = useState(0)
    
    const adjustQuantity = (itemId, amount) => {
        let oldCA = [...cartArr]
        let newCA = oldCA.map(obj => {
            if (obj.id === itemId){
                return {...obj, quantity: obj.quantity+amount}
            }
            return obj
        })
        console.log(newCA)
        setCartArr(newCA)
    }
    
 
    useEffect(()=>{
        let total = 0
        cartArr.forEach(obj => {
            total += (obj.price * obj.quantity)
        })
        setCartTotal(total)
        let count = 0
        cartArr.forEach(obj => {
            count += obj.quantity
        })
        setCartCount(count)
        console.log(cartArr.length)
        if (cartArr.length === 0){
            setCartEmpty(true)
        } else {
            setCartEmpty(false)
        }
        cartArr.forEach(obj =>{
           if(obj.quantity === 0){
            removeItem(obj.id)
           }
        })
    }, [cartArr])


    const removeItem = (id) => {
        let newCA = [...cartArr]
        let index = newCA.findIndex(obj => obj.id === id)
        newCA.splice(index, 1)
        setCartArr(newCA)
    }

    const updateCartArr = (newObj, qtt) => {
        const existingItem = cartArr.find(item => item.id === newObj.id);
      
        if (existingItem) {
          adjustQuantity(newObj.id, qtt || newObj.quantity);
        } else {
          setCartArr(prevCartArr => [...prevCartArr, newObj]);
        }
      }
 
  return (
    <div>
        <CartContext.Provider value = {{ cartCount, removeItem, adjustQuantity, cartEmpty, cartTotal, cartArr, updateCartArr }}>
        {children}
        </CartContext.Provider>
    </div>
  )
}

export default CartProvider