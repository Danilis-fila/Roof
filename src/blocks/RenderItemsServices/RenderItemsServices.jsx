import React, { useEffect, useCallback, useState } from 'react';
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper';

import 'swiper/css/autoplay';


export default function RenderItemsServices(data, index) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return(
        <div className='services__item' data-scroll="true" key={data.ui}>
            <div className='services__item-swiper'>
            <Swiper key={index}
             style={{
              '--swiper-navigation-color': '#FE8702',
              '--swiper-pagination-color': '#FE8702',
             }}
              spaceBetween={10}
              navigation={true}
              thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2">
              <SwiperSlide>
                <Image placeholder="blur" blurDataURL="/image/Крым-Кровля-Blur.png" alt="Обновите страницу..." src={"/image/photoPVH/pvh54.webp"}  quality={80}  width={1000} height={1000}></Image>
              </SwiperSlide>
              <SwiperSlide>
                <Image placeholder="blur" blurDataURL="/image/Крым-Кровля-Blur.png" alt="Обновите страницу..." src={"/image/photoPVH/pvh54.webp"}  quality={80}  width={1000} height={1000}></Image>
              </SwiperSlide>
              <SwiperSlide>
                <Image placeholder="blur" blurDataURL="/image/Крым-Кровля-Blur.png" alt="Обновите страницу..." src={"/image/photoPVH/pvh54.webp"}  quality={80}  width={1000} height={1000}></Image>
              </SwiperSlide>
              <SwiperSlide>
                <Image placeholder="blur" blurDataURL="/image/Крым-Кровля-Blur.png" alt="Обновите страницу..." src={"/image/photoPVH/pvh54.webp"}  quality={80}  width={1000} height={1000}></Image>
              </SwiperSlide>
              <SwiperSlide>
                <Image placeholder="blur" blurDataURL="/image/Крым-Кровля-Blur.png" alt="Обновите страницу..." src={"/image/photoPVH/pvh54.webp"}  quality={80}  width={1000} height={1000}></Image>
              </SwiperSlide>
            </Swiper>
  
            <Swiper key={data.id}
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper"
              breakpoints={{
                1024: {
                  slidesPerView: 4
                },
                555: {
                    slidesPerView: 3
                },  
                100: {
                    slidesPerView: 2
                }
            }}>
              <SwiperSlide>
                <Image placeholder="blur" blurDataURL="/image/Крым-Кровля-Blur.png" alt="Обновите страницу..." src={"/image/photoPVH/pvh54.webp"}  quality={80}  width={1000} height={1000}></Image>
              </SwiperSlide>
              <SwiperSlide>
                <Image placeholder="blur" blurDataURL="/image/Крым-Кровля-Blur.png" alt="Обновите страницу..." src={"/image/photoPVH/pvh54.webp"}  quality={80}  width={1000} height={1000}></Image>
              </SwiperSlide>
              <SwiperSlide>
                <Image placeholder="blur" blurDataURL="/image/Крым-Кровля-Blur.png" alt="Обновите страницу..." src={"/image/photoPVH/pvh54.webp"}  quality={80}  width={1000} height={1000}></Image>
              </SwiperSlide>
              <SwiperSlide>
                <Image placeholder="blur" blurDataURL="/image/Крым-Кровля-Blur.png" alt="Обновите страницу..." src={"/image/photoPVH/pvh54.webp"}  quality={80}  width={1000} height={1000}></Image>
              </SwiperSlide>
              <SwiperSlide>
                <Image placeholder="blur" blurDataURL="/image/Крым-Кровля-Blur.png" alt="Обновите страницу..." src={"/image/photoPVH/pvh54.webp"}  quality={80}  width={1000} height={1000}></Image>
              </SwiperSlide>
            </Swiper>
  
          </div> 
          <div className='services__item-text'>
            <h2 className='services__item-title'>{data.title}</h2>
            <h2 className='services__item-desc'>{data.description}</h2>
          </div>
        </div>
      )
}