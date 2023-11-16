import React, { useEffect, useCallback, useState } from 'react';
import Head from 'next/head';
import servicesData from './Services.json';
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper';

import 'swiper/css/autoplay';
import RenderItemsServices from '@/blocks/RenderItemsServices/RenderItemsServices';


export default function Services() {
  const dataScroll = useCallback(() => {
    const animateElements = document.querySelectorAll('[data-scroll]');
    animateElements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      const win = window.innerHeight - rect.top;
      if (win > 0) {
          element.classList.add('is-ready')
      } else {
          element.classList.remove('is-ready')
      }
    })
  }, [])
  
  useEffect(() => {
    window.addEventListener("scroll", dataScroll);
    dataScroll();
    return () => window.removeEventListener("scroll", dataScroll);
  })
  
  useEffect(() => {
    const animateElements = document.querySelectorAll("[data-scroll]");
      animateElements.forEach((element) => {
          element.classList.add('animate-view')
      })
  }, [dataScroll])

  

  return (
    <>
      <Head>
        <title>Крым-Кровля | Услуги</title>
        <meta name="description" content="Добро пожаловать на сайт Крым кровля в Симферополе, мы предлагаем дешевую установку и продажу высококачественных ПВХ мембран в Крыму. Кровля Симферополь, Крым"/>
        <meta name="keywords" content="крым кровля, крым кровля симферополь, мягкая мембрана, мягкая мембрана для кровли, гидроизоляция мягкой мембраной, материалы для гидроизоляции, мягкая мембрана для фасада, качественная мягкая мембрана, компания занимающаяся мягкой мембраной, гидроизоляционные работы, монтаж мягкой мембраны, дешевая пвх мембрана, пвх кровли низкой стоимости, пвх кровельные материалы, пвх кровельные покрытия, гидроизоляционные работы, кровельные работы, установка гибкого покрытия, водонепроницаемая кровля, монтаж ПВХ мембраны"/> 
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico"/>
        <meta property="og:url" content="https://crimea-roof.ru/services"/>
        <meta property="og:title" content="ООО Крым-Кровля | Услуги"/>
        <meta property="og:description" content="Огромный выбор услуг по эксплуатации мягкой кровли в Крыму. Услуги по эксплуатации мягкой кровли"/>
        <meta property="og:image" content="https://crimea-roof.ru/_next/static/media/logo-roof.32886752.svg"/>
      </Head>
      <div className="services">
          <div className="services__mainTitle">
              <h1 className="services__title">УСЛУГИ</h1>
          </div>

          <div className='services__wrapper'>
            <div className='services__items'>
              {           
                servicesData.map((data, index) => {
                  return <RenderItemsServices data = {data} index={index} key={index} />                    
                })
              }
            </div>
          </div>
      </div>
    </> 
  )
}