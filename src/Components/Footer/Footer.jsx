import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

function Footer() {
  return (
    <div className='footer'>
      <div className="footer-content">
        <div className="footer-left">
            <img src={assets.logo} alt="" />
            <p>BiteRush is your go-to platform for quick, reliable, and delicious food delivery. We partner with the best local restaurants to bring a diverse range of cuisines right to your doorstep, ensuring fast service and top-notch quality. Enjoy your favorite meals without the wait!</p>
            <div className="footer-soial-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-centre">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delievery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-right">
            <h2>Get In Touch</h2>
            <ul>
                <li>+91-800-123-4567</li>
                <li>support@BiteRush.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p>© 2024 BiteRush. All rights reserved.</p>
    </div>
  )
}

export default Footer
