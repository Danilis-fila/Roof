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
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico"/>
        <link rel='manifest' href='/manifest.json'></link>
        
        <link rel="preconnect" href="https://crimea-roof.ru" />
        <link rel="dns-prefetch" href="https://crimea-roof.ru" />
        <meta name="google-site-verification" content="W1qQiOpaHsnbmgRPXhUXTF3f_4SbF1zKBKZLKfvfMnI" />
        <meta name="yandex-verification" content="f2cdafc9a3e0f421" />
        <link rel="preload" href="public/fonts/HeliosCondC-Bold-webfont.ttf" as="font" type="font/woff2" crossOrigin='anonymous'></link>  
      </Head>
      <NextNProgress color='#FE8702' startPosition={1}/>
      <Header/>
      <Component {...pageProps} />
      <Footer2/>
    </>
  )
}
