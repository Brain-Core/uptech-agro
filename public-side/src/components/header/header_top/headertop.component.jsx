import React from 'react'
import logo from '../../../assets/logo.png';
import NavBar from '../navbar/navbar.component';
import './headertop.component.css';
import { Link } from 'react-router-dom';

function HeaderTop() {
   
    
    return (
        <header className="header fixed-top">
            <div className="header__top">
                <Link to='/'>
                <img
                className="header__img"
                 src={logo}
                  alt="..."/>
                </Link>
                <p className="header__mail">info@uptech-agro.com</p>
                <p className="header__phone">+243 823 751 631</p>
            </div>
            <div>
                <NavBar/>
            </div>
        </header>
    )
}

export default HeaderTop
