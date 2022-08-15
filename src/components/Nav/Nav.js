import React from 'react';
import './nav.scss'
import { Link } from 'react-router-dom';


const Nav = (props) => {
    return (
        <div className='navbar'>
            <div className='navlogo'>
                Eyzo Photography
            </div>
            <ul className='navmenu' >
                <Link to='/' className='menuItem' style={{color:`${props.color}`}}>Home</Link>
                <Link to='/booking' className='menuItem' style={{color:`${props.color}`}}>Booking</Link>
                <Link to='/photography' className='menuItem' style={{color:`${props.color}`}}>Photography</Link>
                <Link to='/branding' className='menuItem' style={{color:`${props.color}`}}>Branding</Link>
                <Link to='/about' className='menuItem' style={{color:`${props.color}`}}>About</Link>
                <Link to='/contact' className='menuItem' style={{color:`${props.color}`}}>Contact</Link>
            </ul>
        </div>
    );
};

export default Nav;