
import React from 'react';
import logo from '../images/floralogo.svg'
import { Link } from 'react-router-dom'

const Navbar = ()=>{
    const scrollToServices = () => {
        const servicesSection = document.getElementById('services');
        if (servicesSection) {
            servicesSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        
        <nav className='navbar'>
        <Link to='/'> <img src={logo} alt="logo" /> </Link>
        
        <div className='links'>
            <Link className="link" to="/">HOME</Link>
            <Link className="link" to="/order">ORDER</Link>
            <span className="link" onClick={scrollToServices}>SERVICES</span>
            <Link className="link" to="/about-us">ABOUT US</Link>
        </div>
        </nav>
    )
}

export default Navbar;