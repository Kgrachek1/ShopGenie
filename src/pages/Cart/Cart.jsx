import React, { useState } from 'react';


export default function Cart({ cart, setCart }) {

 
  
  
  return ( 
    <div>
       {cart.lineItems && cart.lineItems.length === 0 ?
       'Your cart is empty' : 
       cart.lineItems && cart.lineItems.map((item) => (
        <div>
         {item.item.title}
         <img src={item.item.main_image} alt="" />
         <button>Remove</button>
        </div>
         
       ))}
       </div>
  )}   