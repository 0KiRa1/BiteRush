import React from 'react'
import './Explore.css'
import {menu_list} from '../../assets/assets'

function Explore({category, setCategory}) {
  return (
    <div className='explore'>
        <h1>Explore our Menu</h1>
        <p className='explore-para'>Dive into a world of flavors with BiteRush. Our diverse menu offers something for everyone, from mouthwatering burgers and pizzas to refreshing salads and decadent desserts.</p>
        <div className="explore-list">
            {menu_list.map((item, index) => {
                return (
                    <div onClick={()=>setCategory(prev=>prev === item.menu_name ? "All" : item.menu_name)} key={index} className="explore-list-item">
                        <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>
                    </div>
                );
            })}
        </div>
        <hr />
    </div>
  )
}

export default Explore
