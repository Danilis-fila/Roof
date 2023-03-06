import React, { useEffect, useCallback } from 'react';
import NextNProgress from 'nextjs-progressbar';

import Header from '@/blocks/Header/Header';
import Footer from '@/blocks/Footer/Footer';

import '@/styles/globals.scss';
import '../styles/about_the_company.scss';
import '../styles/contacts.scss';
import '../styles/AboutUs.scss';
import '../styles/Estimate.scss';
import '../styles/Footer.scss';
import '../styles/Header.scss';
import '../styles/Partners.scss';
import '../styles/Service.scss';
import '../styles/Slider.scss';
import '../styles/Services.scss';
import '../styles/Gallery.scss';
import '../styles/PopupGallery.scss';
import '../styles/NotFoundPage.scss';

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
      <NextNProgress color='#FE8702' startPosition={1}/>
      <Header/>
      <Component {...pageProps} />
      <Footer/>
    </>
  )
}
