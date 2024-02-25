import { createContext, useContext } from "react";

export const CartContext = createContext()

export function useCartContext() {
  const cartArr = useContext(CartContext)

  if (cartArr === undefined){
    throw new Error ("useCartContext need to be used with a CartContext. It is currently undefined.")
  }

  return cartArr
}