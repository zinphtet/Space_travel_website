import React ,{useState}from 'react'
import './Navbar.scss'
import Logo from '../../assets/shared/logo.svg'
import Humber from '../../assets/shared/icon-hamburger.svg'
import Close from '../../assets/shared/icon-close.svg'
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const [navOpen , setNavOpen] = useState(false)

  const handleNav = ()=>{
    setNavOpen( (state) =>!state)
  }
  return (
    <div className="navbar">
        <div className="logo">
          <img src={Logo} alt="This is a logo" />
        </div>
       
        <ul className={`navlinks ${navOpen? 'open' : ''}`} >
          <li className={`navlink nav_link_item`} onClick={handleNav}><NavLink to='/' > <span>00</span> HOME</NavLink></li>
          <li className='navlink nav_link_item' onClick={handleNav}><NavLink to='/destination'><span>01</span>Destination</NavLink></li>
          <li className='navlink nav_link_item' onClick={handleNav}><NavLink to='/crew'><span>02</span> Crew</NavLink></li>
          <li className='navlink nav_link_item' onClick={handleNav}><NavLink to='/technology'> <span>03</span>Technology</NavLink></li>
        </ul>
        <div className="menu">
          <img src={navOpen ?Close : Humber} alt="menu icon" onClick={handleNav} />
        </div>
    </div>
  )
}

export default Navbar