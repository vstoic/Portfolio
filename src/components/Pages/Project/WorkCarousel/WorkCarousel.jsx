import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './workCarousel.scss';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper';

export default function WorkCarousel() {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/felp-thumbnail.gif" alt="loading..." />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/timerfighter-thumbnail.gif" alt="loading..." />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/crawl-thumbnail.gif" alt="loading..." />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
