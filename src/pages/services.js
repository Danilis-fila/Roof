import React, { useEffect, useCallback } from 'react';
import Head from 'next/head';
import servicesData from './Services.json';
import Image from 'next/image';

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
        <meta name="robots" content="index, follow" />
        <meta name="description" content="Огромный выбор услуг по эксплуатации мягкой кровли в Крыму. Услуги по эксплуатации мягкой кровли"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico"/>
        <meta name="keywords" content="мягкая кровля, кровля симферополь, кровельные работы, крыша из пвх мембраны, крым кровля, крыша крым, из чего сделать крышу, сделать кровлю, чем перекрыть крышу, что такое пвх мембрана"/>
        <meta property="og:url" content="https://crimea-roof.ru/services"/>
        <meta property="og:title" content="ООО Крым-Кровля | Услуги"/>
        <meta property="og:description" content="Огромный выбор услуг по эксплуатации мягкой кровли в Крыму. Услуги по эксплуатации мягкой кровли"/>
        <meta property="og:image" content="https://crimea-roof.ru/_next/static/media/logo-roof.32886752.svg"/>
      </Head>
      <div className="services">
            <div className="services__wrapper">
                <h1 className="services__title">УСЛУГИ</h1>
                {
                  servicesData.map(data => {
                      return (
                          <div className="services__item" key={data.id} data-scroll="true">
                              <h2 className="services__item-title">{data.title}</h2>
                              <Image  placeholder="blur" 
                                blurDataURL="/image/Крым-Кровля-Blur.png" 
                                quality={100} 
                                className="services__item-img" 
                                src={data.img} 
                                alt="фото мембраны" 
                                width={500} 
                                height={450}>
                              </Image>
                              <div className="services__item-desc">{data.description}</div>
                              <div className="services__item-line"></div>
                          </div>
                      )
                  })
                }
            </div>
        </div>
    </> 
  )
}
