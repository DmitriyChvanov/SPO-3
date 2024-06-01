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
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}

export default Slider
