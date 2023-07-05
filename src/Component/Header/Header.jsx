import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
          <div>
          <a href=" /shop">Shoppp</a>
            <a href="/Review">Order Review</a>
            <a href="/inventory">Inventory</a>
            <a href="/login">login</a>
          </div>
            
        </nav>
    );
};

export default Header;