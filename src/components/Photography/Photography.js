import React, { useRef, useState, useEffect } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./photography.scss";

import { FreeMode, Pagination } from "swiper";

import { photos } from './photos';
import { GiPhotoCamera, GiDoorHandle } from 'react-icons/gi';
import { BsFillCalendarDayFill } from 'react-icons/bs'
import { BiPhotoAlbum } from 'react-icons/bi';

import { useSelector } from "react-redux";

const Photography = () => {
    
    const images = useSelector((state)=> state.images)
    console.log(images);
    return (
        <div className="photographyy">
                <h1>Photography</h1>
            
            <div className="packages">
                <div>
                    <h3>packages</h3>
                    <BiPhotoAlbum className="ppiconn" />
                </div>
                <div className="cardsp">
                    <h4>Studio</h4>
                    <GiPhotoCamera className="pkicon" />
                    <h6>Single photo: 100Ksh</h6>
                    <h6>Six photos: 500 Ksh</h6>
                    <button className="btn-gradd">Book</button>
                </div>
                <div className="cardsp">
                    <h4>Outdoor</h4>
                    <GiDoorHandle className="pkicon" />
                    <h6>Single photo: 100Ksh</h6>
                    <h6>Six photos: 500 Ksh</h6>
                    <button className="btn-gradd">Book</button>
                </div>
                <div className="cardsp">
                    <h4>Whole day</h4>
                    <BsFillCalendarDayFill className="pkicon" />
                    <h6>Four hours: 100Ksh</h6>
                    <h6>Eight hours: 500 Ksh</h6>
                    <button className="btn-gradd">Book</button>
                </div>
              
            </div>
            <div className="studioo">
                <h2 className="studioheader">Studio Photos</h2>
                <Swiper
                    slidesPerView={5}
                    spaceBetween={5}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper"
                    >
                        {
                            photos.map((pp, index)=>
                                <SwiperSlide key={index}>
                                    <div className="studiopics">
                                        <img className="picc" src={pp.img} alt='Studio Photos' />
                                    </div>
                                </SwiperSlide>
                            )
                        }
                </Swiper>
            </div>
            <div className="studioo">
                <h2 className="studioheader">Wedding Photos</h2>
                <Swiper
                    slidesPerView={5}
                    spaceBetween={5}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper"
                    >
                        {
                            photos.map((pp, index)=>
                                <SwiperSlide key={index}>
                                    <div className="studiopics">
                                        <img className="picc" src={pp.img} alt='Studio Photos' />
                                    </div>
                                </SwiperSlide>
                            )
                        }
                </Swiper>
            </div>
            <div className="studioo">
                <h2 className="studioheader">Outdoor Photos</h2>
                <Swiper
                    slidesPerView={5}
                    spaceBetween={5}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper"
                    >
                        {
                            photos.map((pp, index)=>
                                <SwiperSlide key={index}>
                                    <div className="studiopics">
                                        <img className="picc" src={pp.img} alt='Studio Photos' />
                                    </div>
                                </SwiperSlide>
                            )
                        }
                </Swiper>
            </div>
        </div>
    );
};

export default Photography;