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
                        <Image className="partners__card" blurDataURL="/image/loading.svg" placeholder="blur"  alt="sika" src='/image/partners/Sika2.svg'  quality={80}  width={250} height={65}></Image>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image className="partners__card" blurDataURL="/image/loading.svg" placeholder="blur" alt="leister" src='/image/partners/leister.svg'  quality={80}  width={250} height={65}></Image>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image className="partners__card" blurDataURL="/image/loading.svg" placeholder="blur" alt="forsthoff" src='/image/partners/forsthoff2.jpg'  quality={80}  width={250} height={65}></Image>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image className="partners__card" blurDataURL="/image/loading.svg" placeholder="blur" alt="technonicol" src='/image/partners/Technonicol2.jpg'  quality={80}  width={250} height={65}></Image>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image className="partners__card" blurDataURL="/image/loading.svg" placeholder="blur" alt="plastfoil" src='/image/partners/Plastfoil.jpg'  quality={80}  width={250} height={65}></Image>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image className="partners__card" blurDataURL="/image/loading.svg" placeholder="blur" alt="penoplex" src='/image/partners/penoplex.png'  quality={80}  width={250} height={65}></Image>
                    </SwiperSlide>
                    <SwiperSlide style={{display: "flex", alignItems: "center"}}>
                        <Image className="partners__card" blurDataURL="/image/loading.svg" placeholder="blur" alt="Herz" src='/image/partners/HERZ.png'  quality={80}  style={{height:"52px"}} width={250} height={52}></Image>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image className="partners__card" blurDataURL="/image/loading.svg" placeholder="blur" alt="Ritmo" src='/image/partners/Ritmo.png'  quality={80}  style={{objectFit: "cover"}} width={250} height={65}></Image>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}
