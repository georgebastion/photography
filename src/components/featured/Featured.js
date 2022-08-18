import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCube, Autoplay, Pagination, Navigation } from "swiper";

import './featured.scss'
import { photos } from '../Photography/photos';

const Featured = () => {
    return (
    <div className="featuredddd">
        <h1 className="ffhh">FEATURED PHOTOS</h1>
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
        }}
        pagination={{
            clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiperrr"
        > 
            
            {
                photos.map((pf)=>
                <SwiperSlide className="featuredpic">
                    <img src={pf.img} alt='featured photos' />

                    </SwiperSlide>
                )
            }
      </Swiper>
    </div>
    );
};

export default Featured;