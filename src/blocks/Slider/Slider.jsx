import React, {useEffect, useState} from "react";
import sliderData from './SliderData.json';
import Image from "next/image";

export default function Slider() {

  const [currSlide, setCurrSlide] = useState(0);
  useEffect(() => setCurrSlide(0),[]);

  return (
        <div className="slider">

            {
                sliderData.map((slide, index) => {
                    return(
                        <div className={`slider__slide ${currSlide === index ? 'slider__slide--active' : ''}`} key={index} onClick={() => setCurrSlide((index + 1) % 4)}> 
                            <Image className="slider__slide-img" 
                                priority
                                quality={80} 
                                placeholder="blur"
                                blurDataURL="/image/Крым-Кровля-Blur.png"
                                loading="eager" 
                                src={slide.img} 
                                alt={slide.sliderTitle} 
                                fill
                            />
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
            </ul>
        </div>
    )
  }