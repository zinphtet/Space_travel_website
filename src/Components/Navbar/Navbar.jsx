import React from 'react'
import './Navbar.scss'
import Logo from '../../assets/shared/logo.svg'
import Humber from '../../assets/shared/icon-hamburger.svg'
import Close from '../../assets/shared/icon-close.svg'
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  
  return (
    <div className="navbar">
        <div className="logo">
          <img src={Logo} alt="This is a logo" />
        </div>
       
        <ul className='navlinks'>
          <li className={`navlink nav_link_item`}><NavLink to='/' > <span>00</span> HOME</NavLink></li>
          <li className='navlink nav_link_item'><NavLink to='/destination'><span>01</span>Destination</NavLink></li>
          <li className='navlink nav_link_item'><NavLink to='/crew'><span>02</span> Crew</NavLink></li>
          <li className='navlink nav_link_item'><NavLink to='/technology'> <span>03</span>Technology</NavLink></li>
        </ul>
        <div className="menu">
          <img src={Humber} alt="menu icon" />
        </div>
    </div>
  )
}

export default Navbar