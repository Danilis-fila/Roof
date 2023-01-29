import React, {useEffect, useState} from "react";

import sliderData from './SliderData.json';

// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import { Pagination, EffectFade } from 'swiper';
// import 'swiper/css';
// import 'swiper/css/pagination';

export default function Slider() {

  const [currSlide, setCurrSlide] = useState(0);

  useEffect(() => setCurrSlide(0),[]);

  return (
        <div className="slider">

            {
                sliderData.map((slide, index) => {
                    return(
                        <div className={`slider__slide ${currSlide === index ? 'slider__slide--active' : ''}`} key={index}  style={{backgroundImage: `url(${slide.img})`}}> 
                            <div className="slider__slide-external">
                                <div className="slider__slite-title">{slide.sliderTitle}</div>
                                <div className="slider__slite-description">{slide.sliderDescription}</div>
                            </div>
                        </div>  
                    )
                })
            }

            <ul className="slider__paginations">
                <li className={`slider__pagination ${currSlide === 0 ? 'slider__pagination--active' : ''}`} onClick={() => setCurrSlide(0)}></li>
                <li className={`slider__pagination ${currSlide === 1 ? 'slider__pagination--active' : ''}`} onClick={() => setCurrSlide(1)}></li>
                <li className={`slider__pagination ${currSlide === 2 ? 'slider__pagination--active' : ''}`} onClick={() => setCurrSlide(2)}></li>
                <li className={`slider__pagination ${currSlide === 3 ? 'slider__pagination--active' : ''}`} onClick={() => setCurrSlide(3)}></li>
                <li className={`slider__pagination ${currSlide === 4 ? 'slider__pagination--active' : ''}`} onClick={() => setCurrSlide(4)}></li>
            </ul>
        </div>
    )
  }
  



//   <Swiper
//             spaceBetween={0}
//             effect='fade'
//             onSlideChange={() =>  console.log('slide change') }
//             onSwiper={(swiper) => console.log(swiper)}
//             modules={[Pagination, EffectFade]}
//             pagination={{ clickable: true }}
//             simulateTouch={false}
//             speed={2000}
//             >
//                 {
//                     sliderData.map(data => {
//                     return (
//                         <SwiperSlide key={data.id} >
//                             <div className="slider__slide"  style={{backgroundImage: `url(${data.sliderURL})`}}> 
//                                 <div className="slider__slide-external"></div>
//                                 <div className="slider__slite-title">{data.sliderTitle}</div>
//                                 <div className="slider__slite-description">{data.sliderDescription}</div>
//                             </div> 
//                         </SwiperSlide>
//                         )
//                     })
//                 }
//             </Swiper>