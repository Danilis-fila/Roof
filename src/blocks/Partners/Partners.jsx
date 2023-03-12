import React from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { Autoplay } from 'swiper';
import 'swiper/css/autoplay';


export default function Partners() {
    return (
        <div className="partners" data-scroll>
            <h2 className="partners__title">НАШИ ПАРТНЕРЫ</h2>
            <div className="partners__wrapper">
                <Swiper
                    slidesPerView="auto"
                    loop={true}
                    modules={[Autoplay]}
                    autoplay={{ delay: 5000, disableOnInteraction: false}}
                    breakpoints={{
                        1600: {
                            slidesPerView: 4
                        },
                        1200: {
                            slidesPerView: 3
                        },
                        768: {
                            slidesPerView: 2
                        } 
                    }}>
                    
                    
                    <SwiperSlide>
                        <Image className="partners__card" alt="sika" src='/image/partners/Sika2.svg' width={250} height={65}></Image>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image className="partners__card" alt="leister" src='/image/partners/leister.svg' width={250} height={65}></Image>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image className="partners__card" alt="forsthoff" src='/image/partners/forsthoff2.jpg' width={250} height={65}></Image>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image className="partners__card" alt="technonicol" src='/image/partners/Technonicol2.jpg' width={250} height={65}></Image>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image className="partners__card" alt="plastfoil" src='/image/partners/Plastfoil.jpg' width={250} height={65}></Image>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}
