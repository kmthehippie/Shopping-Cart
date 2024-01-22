import React from 'react'
import { Form } from 'react-router-dom'
import "../styles/contact.scss"

function Contact() {
  return (
    <div className='contact'>
        <h3>Contact Us</h3>
        <Form>
            <div className="name">
            <label for="name">Name:</label>
            <input type="text" name="name" />
            </div>
           <div className="email">
           <label for="email">Email Address:</label>
            <input type="email" name="email" />
           </div>
            <div className="message">
                <label for="message">Message:</label>
                <textarea name="message" id="message" cols="42" rows="10"></textarea>
            </div>

            <button>Submit</button>
        </Form>
    </div>
  )
}

export default Contact