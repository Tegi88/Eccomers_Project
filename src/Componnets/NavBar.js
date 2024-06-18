import React from 'react'
import {Link} from "react-router-dom";
import './Nav.css'
import shopingcart from '../shopping-cart.svg'
import favorit from '../favorite.svg'
function NavBar() {
  return (
    <div className='navbar'>
        <h1>E-Commers</h1>

        <div className='navbar-menu'>
            <ul>
                <li><Link style={{ textDecoration: 'none' }} to="/">Shop</Link></li>
                <li><Link style={{ textDecoration: 'none' }} to="/men">Men</Link></li>
                <li>Women</li>
                <li>Kids</li>
                <li><Link style={{ textDecoration: 'none' }} to="/cart">Cart</Link></li>
            </ul>
        </div>

        
        <button className='login-btn'>Login</button>
      

        <div className='navbar-fav-crat'>
            <img className='favorit-icon' src={favorit} alt='favorit-icon'/>
            <img className='cart-icon' src={shopingcart} alt='cart-icon'/>
        </div>

    </div>
  )
}

export default NavBar