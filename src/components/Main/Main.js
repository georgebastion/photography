import React, { useEffect, useState } from 'react';
import Booking from '../Booking.js/Booking';
import Branding from '../Branding/Branding';
import Featured from '../featured/Featured';
import Home from '../Home/Home';
import Nav from '../Nav/Nav';
import Photography from '../Photography/Photography';

import { useDispatch } from 'react-redux';
import { getImages } from '../../actions/images'
import Admin from '../admin/Admin';
import Loader from '../loader/Loader';

import Headroom from 'react-headroom';

const Main = () => {
    const dispatch = useDispatch();
    const [currentid, setCurrentid] = useState(null);

    useEffect(()=>{
        dispatch(getImages());
    }, [ currentid, dispatch])

    return (
        <div className='mainn'>
            <Headroom style={{
                webkitTransition: 'all .5s ease-in-out',
                mozTransition: 'all .5s ease-in-out',
                oTransition: 'all .5s ease-in-out',
                transition: 'all .5s ease-in-out'
                }}
            >
                <Nav />
            </Headroom>
            <Home />
            <Admin currentid={currentid} setCurrentid={setCurrentid} />
            <Photography setCurrentid={ setCurrentid }/>
            <Booking /> 
            <Branding />
            <Featured />
        </div>
    );
};

export default Main;