import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../Components/Context/StoreContext'
import { useNavigate } from 'react-router-dom'

function Cart() {
  const { cartItem, food_list, removeFromCart, totalCartAmount, increaseQuantity, decreaseQuantity } = useContext(StoreContext)
  const navigate = useNavigate()
  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItem[item._id] > 0) {
            return (
              <div className="cart-items-item" key={index}>
                <img src={item.image} alt="" />
                <p>{item.name}</p>
                <p>₹ {item.price}</p>
                <div className="quantity-controls">
                  <button onClick={() => decreaseQuantity(item._id)}>-</button>
                  <p>{cartItem[item._id]}</p>
                  <button onClick={() => increaseQuantity(item._id)}>+</button>
                </div>
                <p>₹ {item.price * cartItem[item._id]}</p>
                <p onClick={() => removeFromCart(item._id)}>X</p>
              </div>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
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
              <p>₹ {totalCartAmount() === 0 ? 0 : 40}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Total</p>
              <p>₹ {totalCartAmount() === 0 ? 0 : totalCartAmount() + 40}</p>
            </div>
          </div>
          <button onClick={() => navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="promo-code">
          <p>If you have a promo code, Enter it here</p>
          <div className="promo-code-input">
            <input type="text" placeholder="Enter your promo code" />
            <button>APPLY</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
