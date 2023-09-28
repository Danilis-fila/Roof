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
        <title>Услуги</title>
        <meta name="description" content="Крым-Кровля, Огромный выбор услуг по эксплуатации мягкой кровли в Крыму. Услуги по эксплуатации мягкой кровли"/>
        <meta name="keywords" content="Крым-Кровля, крым кровля, ООО Крым Кровля, ПВХ мембрана Крым, ПВХ мембрана Симферополь, Плоская кровля Симферополь, 
                                      Аэратор Симферополь, Дорожки ПВХ, Мембрана plastfoil пластфоил, Гидроизоляция фундамента, Гидроизоляция кровли ПВХ,
                                      ПВХ кровля крыша, Гидроизоляция террасы, ПВХ воронки Крым, Воронки для плоской кровли, ПВХ металл, Крым Кровля ПВХ,
                                      Ремонт ПВХ Крым, Ремонт плоской кровли крыши, Ремонт битумной кровли, Дорожки для плоской крыши, Эксплуатируемая кровля"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="image/logo-roof.svg"/>
      </Head>
      <div className="services">
            <div className="services__wrapper">
                <h1 className="services__title">УСЛУГИ</h1>
                {
                  servicesData.map(data => {
                      return (
                          <div className="services__item" key={data.id} data-scroll="true">
                              <h2 className="services__item-title">{data.title}</h2>
                              <Image placeholder="blur" blurDataURL="/image/Крым-Кровля-Blur.png" quality={80} className="services__item-img" src={data.img} alt="фото мембраны" width={500} height={450} ></Image>
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
