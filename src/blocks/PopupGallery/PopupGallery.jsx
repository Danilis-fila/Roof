import React from "react";
import Image from "next/image";

import { Navigation, Pagination, Scrollbar, A11y, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export default function PopupGallery({active, onClose, gallery}) {

  if(!active) {
    return null;
  }

  return (
    <div className="popupGallery" onClick={onClose}>
      <div className="popupGallery__close" onClick={onClose}></div>
      <div className="popupGallery__wrapper" onClick={event => event.stopPropagation()}>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Thumbs]}
        slidesPerView={1}
        loop={true}
        navigation
        >
          {
            gallery.map((img, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="popupGallery__item2" style={{backgroundImage: `url(${img})`}}></div>
                </SwiperSlide>
              )
            })
          }
        </Swiper>
      </div>
    </div>
  )}



