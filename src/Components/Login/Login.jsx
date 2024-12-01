import React, { useState } from 'react'
import './Login.css'
import { assets } from '../../assets/assets'

function Login({setShowLogin}) {
    const [curr, setCurr] = useState("Sign Up")
  return (
    <div className='login'>
        <form className="login-container">
            <div className="login-title">
                <h2>{curr}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-inputs">
                {curr === "Sign Up" ? <input type="text" placeholder='Enter Your Name' required /> : <></>}
                <input type="email" placeholder='Enter Your Email' required/>
                <input type="password" placeholder='Enter Your Password' required/>
            </div>
            <button>{curr === "Sign Up"? "Create Account" : "Login"}</button>
            <div className="login-conditions">
                <input type="checkbox" required/>
                <p>By continuing, I agree to the Terms of Service and Privacy Policy.</p>
            </div>
            {curr === "Login" 
            ? <p>Create a new Account? <span onClick={()=>setCurr("Sign Up")}>Click here</span></p>
            : <p>Already have an Account? <span onClick={()=>setCurr("Login")}>Login here</span></p>
            }
        </form>
      
    </div>
  )
}

export default Login
