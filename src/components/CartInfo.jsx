import React from 'react'
import { p1s } from '../assets'
import { useContext } from 'react'
import { MyContext } from '../context/MyContext'
import './CartInfo.css'
const CartInfo = ({setShow}) => {
  const {count, setCount} = useContext(MyContext)
  const handleClick =()=>{
    setShow(show => !show)
    setCount(0)
  }
    return (
    <div className='cart-info' >
      <p>Cart</p>
      {
        count ? 
        <div className='not-empty' >
          <div className='up-section'>
            <img src={p1s} alt="p1s" />
            <div className='ps' >
            <p>Fall Limited Edition Sneakers
            $125.00 x {count} <span>${125 * count}.00</span></p>
            </div>
          </div>
          <button type='button' onClick={handleClick}>
            Checkout
          </button>
        </div>
        :
        <div className='empty' >
        <p>your cart is empty</p>
        </div>
      }
    </div>
  )
}

export default CartInfo