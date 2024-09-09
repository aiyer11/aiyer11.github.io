import React from "react";
import logo from '../../assets/logo.png'
import './nav.css'

const Navbar = ()=> {
    return(
        <nav className="navBar">
            <div className="left">
                <a href="/" className="logo">
                    <img src={logo} alt="logo"/>
                </a>
            </div>
            <div className="right">
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#experience">Experience</a>
                </li>
                <li>
                    <a href="#projects">Projects</a>
                </li>
                <li>
                    <a href="#contact">Contact Me</a>
                </li>
            </div>
        </nav>
    )
};

export default Navbar;