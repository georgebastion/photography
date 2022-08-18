import React, { useEffect } from 'react';
import Booking from '../Booking.js/Booking';
import Branding from '../Branding/Branding';
import Featured from '../featured/Featured';
import Home from '../Home/Home';
import Nav from '../Nav/Nav';
import Photography from '../Photography/Photography';

import { useDispatch } from 'react-redux';
import { getImages } from '../../actions/images'
import Admin from '../admin/Admin';

const Main = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getImages());
    }, [dispatch])

    return (
        <div className='mainn'>
            <Home />
            <Admin />
            <Photography/>
            <Booking /> 
            <Branding />
            <Featured />
        </div>
    );
};

export default Main;