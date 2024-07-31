import React, { useState } from 'react'


import '../styles/Navbar.css'


import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav>
            <div className="logo">
                <h1>TECHYSTAR</h1>
            </div>

            <div className="menu" onClick={() => {
                setMenuOpen(!menuOpen)
            }}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <ul className={menuOpen ? 'open' : ''}>
                <li><HashLink onClick={() => setMenuOpen(false)} to={'/#home'}>Home</HashLink></li>
                <li><Link onClick={() => setMenuOpen(false)} to={'/contact'}>Contact</Link></li>
                <li><HashLink onClick={() => setMenuOpen(false)} to={'/#about'}>About</HashLink></li>
                <li><HashLink onClick={() => setMenuOpen(false)} to={'/#brands'}>Brands</HashLink></li>
                <li><Link onClick={() => setMenuOpen(false)} to={'/services'}>Services</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar