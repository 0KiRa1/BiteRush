import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';
import { StoreContext } from '../Context/StoreContext';

const Navbar = ({setShowLogin}) => {

    const [menu, setMenu] = useState("Home");
    const {totalCartAmount} = useContext(StoreContext)

  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.logo} alt="" className="logo" /></Link>
      <ul className="nav-menu">
        <li onClick={()=>setMenu("Home")} className={menu === "Home" ? "active" : ""}>Home</li>
        <li onClick={()=>setMenu("Menu")} className={menu === "Menu" ? "active" : ""}>Menu</li>
        <li onClick={()=>setMenu("App")} className={menu === "App" ? "active" : ""}>App</li>
        <li onClick={()=>setMenu("Contact")} className={menu === "Contact" ? "active" : ""}>Contact</li>
      </ul>
      <div className="nav-right">
        <img src={assets.search_icon} alt="" />
        <div className="nav-search">
            <Link to='/Cart'>
              <img src={assets.basket_icon} alt="" />
            </Link>
            <div className={totalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        <button onClick={()=>setShowLogin(true)}>Sign In</button>
      </div>
    </div>
  )
}

export default Navbar