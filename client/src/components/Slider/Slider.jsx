import React, { useContext, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Context } from "../.."

import 'swiper/css';
import 'swiper/css/pagination';

import "./Slider.css"


import { Pagination } from 'swiper/modules';
import Item from '../Item/Item';

const Slider =() => {
  
    const {item} = useContext(Context)

    return (
    <>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        
        {item.items.map(item => 
          <SwiperSlide><Item key={item.id} item={item}/></SwiperSlide>      
              )}
      </Swiper>
    </>
  );
}

export default Slider
