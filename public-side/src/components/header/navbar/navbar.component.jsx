import React from 'react'
import './navbar.component.css';


function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="#home">
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                <a className="nav-link text-light font-weight-bold active" aria-current="page" href="#home">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link text-light font-weight-bold" href="#product">Products</a>
                </li>
                <li className="nav-item">
                <a className="nav-link text-light font-weight-bold" href="#impact">Impacts</a>
                </li>
                <li className="nav-item">
                <a className="nav-link text-light font-weight-bold" href="#team">OurTeam</a>
                </li>
                <li className="nav-item">
                <a className="nav-link text-light font-weight-bold" href="#contact">Contact Us</a>
                </li>
                <li className="nav-item">
                <a className="ml-2 btn btn-primary  rounded text-light font-weight-bold" 
                href="https://uptech-admin.herokuapp.com/" target="_blank" rel='noreferrer'>Sign in</a>
                </li>
            </ul>
            </div>
        </div>
    </nav>
    )
}

export default NavBar
