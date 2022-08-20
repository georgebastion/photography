import React from 'react';
import './nav.scss'
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';


const Nav = (props) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const [toggleMenu, setToggleMenu] = useState(false);
    
    const navigate = useNavigate();
    const location = useLocation()
    const dispatch = useDispatch();
    
    useEffect(()=>{
        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location])


    const handleLogout=()=>{
        dispatch({type:'LOGOUT'})

        navigate('/')
    }
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
                {
                    user ?
                    <span onClick={handleLogout} className='menuItem' style={{color:`${props.color}`}}>LOGOUT</span>
                    :
                    <Link to='/auth' className='menuItem' style={{color:`${props.color}`}}>LOGIN</Link>


                }
            </ul>
                {
                    user ?
                    <div className='userr' style={{color:'white'}}>
                        {user.result.name}     
                    </div>
                    :
                    null
                }
            <div className='topd'>
            {toggleMenu
                ? <RiCloseLine color="#fff" size={27} style={{animation: 'all 3s ease'}} onClick={() => setToggleMenu(false)} />
                : <RiMenu3Line color="#fff" size={27} style={{animation: 'all 3s ease'}} onClick={() => setToggleMenu(true)} />}
                    {toggleMenu && (
                        <div className='topx'>
                            <Link to='/' className='menuItem' style={{color:`${props.color}`}}>Home</Link>
                            <Link to='/booking' className='menuItem' style={{color:`${props.color}`}}>Booking</Link>
                            <Link to='/photography' className='menuItem' style={{color:`${props.color}`}}>Photography</Link>
                            <Link to='/branding' className='menuItem' style={{color:`${props.color}`}}>Branding</Link>
                            <Link to='/about' className='menuItem' style={{color:`${props.color}`}}>About</Link>
                            <Link to='/contact' className='menuItem' style={{color:`${props.color}`}}>Contact</Link>
                        </div>
        
                    )
            }
            </div>
        </div>
    );
};

export default Nav;