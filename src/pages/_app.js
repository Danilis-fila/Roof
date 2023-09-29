import React, { useEffect, useCallback } from 'react';
import NextNProgress from 'nextjs-progressbar';

import Header from '@/blocks/Header/Header';
import Footer2 from '@/blocks/Footer/Footer2';

import '@/styles/globals.scss';
import '../styles/about_the_company.scss';
import '../styles/contacts.scss';
import '../styles/AboutUs.scss';
import '../styles/Estimate.scss';
import '../styles/Footer2.scss';
import '../styles/Header.scss';
import '../styles/Partners.scss';
import '../styles/Service.scss';
import '../styles/Slider.scss';
import '../styles/Services.scss';
import '../styles/Gallery.scss';
import '../styles/PopupGallery.scss';
import '../styles/NotFoundPage.scss';
import Head from 'next/head';

// document.addEventListener('DOMContentLoaded', function(event) {
//   console.log('DOMContentLoaded before class:');
// });

export default function App({ Component, pageProps }) {
  
  const dataScroll = useCallback(() => {
    const animateElements = document.querySelectorAll('[data-scroll]');
    animateElements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      // if(rect === null) animateElements = document.querySelectorAll('[data-scroll]');
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
      <meta name="description" content="Крым-Кровля, Контактное лицо, Телефон, Telegram, Viber, WhatsApp, Контакты, "/>
      <meta name="keywords" content="ООО Крым Кровля, ООО Крым-Кровля, ООО крым кровля, 
                               крым кровля, Крым кровля, Крым Кровля, 
                               крым кровля Симферополь, Крым кровля Симферополь, Крым Кровля Симферополь,"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="image/logo-roof.svg"/>
        <link rel="preconnect" href="https://crimea-roof.ru" />
        <link rel="dns-prefetch" href="https://crimea-roof.ru" />
        <meta name="google-site-verification" content="W1qQiOpaHsnbmgRPXhUXTF3f_4SbF1zKBKZLKfvfMnI" />
        <link rel="preload" href="public/fonts/HeliosCondC-Bold-webfont.ttf" as="font" type="font/woff2" crossOrigin='anonymous'></link>
      </Head>
      <NextNProgress color='#FE8702' startPosition={1}/>
      <Header/>
      <Component {...pageProps} />
      <Footer2/>
    </>
  )
}
