
import { React } from 'react';
import logo from '../Logo.png';


import './Header.css';
const Header = () => { 
    return( 
        <div className="header">
           
            <img src={logo} alt=""/>
            <nav>
                <h1><a href="/shop">Shop</a>
                <a href="/review">Order Review</a>
                <a href="/inventory">Manage Inventory</a>
                </h1>
            </nav>
            
        </div>
    );
};

export default Header;