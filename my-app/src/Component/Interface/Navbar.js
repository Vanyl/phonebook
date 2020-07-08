import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <nav className='navbar mb-3 fixed-top'>                
                <a href='/' className='navbar-brand'><i className="fas fa-phone-square-alt"></i> Phonebook</a>     
                    <ul>
                        <li className='nav-item ml-auto d-inline-block ml-15 active'>
                            <Link to='/' className='nav-link'>Home</Link>
                        </li>
                        <li className='nav-item ml-auto d-inline-block'>
                            {/* <a href='/' className='nav-link'>About</a> */}
                            <Link to='/about' className='nav-link'>About</Link>
                        </li>
                    </ul>                
            </nav>
        </div>
    )
}
