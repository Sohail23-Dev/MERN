import React from 'react'

const Cart = () => {
  const cart = localStorage.getItem("Cart");
  return (
    <>
      <div>
        Cart {cart}
      </div>
    </>
  )
}

export default Cart