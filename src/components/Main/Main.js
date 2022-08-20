import React, { useEffect, useState } from 'react';
import Booking from '../Booking.js/Booking';
import Branding from '../Branding/Branding';
import Home from '../Home/Home';
import Nav from '../Nav/Nav';
import Photography from '../Photography/Photography';

import { useDispatch } from 'react-redux';
import { getImages } from '../../actions/images'
import Admin from '../admin/Admin';


import Headroom from 'react-headroom';

const Main = () => {
    const dispatch = useDispatch();
    const [currentid, setCurrentid] = useState(null);

    useEffect(()=>{
        dispatch(getImages());
    }, [ currentid, dispatch])

    return (
        <div className='mainn'>
    
            <Nav color='white' />
            <Home />
            <Admin currentid={currentid} setCurrentid={setCurrentid} />
            <Photography setCurrentid={ setCurrentid }/>
            <Booking /> 
            <Branding />
        </div>
    );
};

export default Main;