import React, { useContext } from 'react'
import './Order.css'
import { StoreContext } from '../../Components/Context/StoreContext'

function Order() {
  const {totalCartAmount} = useContext(StoreContext)
  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="field">
          <input type="text" placeholder='First name' required/>
          <input type="text" placeholder='Last name' required/>
        </div>
        <input type="email" placeholder='Email' required/>
        <input type="text" placeholder='Phone' required/>
        <div className="field">
          <input type="text" placeholder='Street' required/>
          <input type="text" placeholder='Landmark' required/>
        </div>
        <div className="field">
          <input type="text" placeholder='City' required/>
          <input type="text" placeholder='Zip Code' required/>
        </div>
        <textarea placeholder="Additional Instructions" rows="4"></textarea>
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>₹ {totalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery fee</p>
              <p>₹ {totalCartAmount()===0?0:40}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Total</p>
              <p>₹ {totalCartAmount()===0?0:totalCartAmount() + 40}</p>
            </div>
          </div>
          <button>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>

  )
}

export default Order
