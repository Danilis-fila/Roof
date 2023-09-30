import Head from 'next/head'
import { useMemo } from 'react';
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Slider from '@/blocks/Slider/Slider'
import Estimate from '@/blocks/Estimate/Estimate'
import AboutUs from '@/blocks/AboutUs/AboutUs'
import Service from '@/blocks/Service/Service'
import Partners from '@/blocks/Partners/Partners'
import Gallery from '@/blocks/Gallery/Gallery'
import { useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  // useEffect(() => {
  //   document.body.style.zoom = 1;
  //   //window.devicePixelRatio = 1.25
  // },[])

  return (
    <>
      <Head>
        <title>Крым-Кровля | Главная</title>
        <meta name="description" content="Компания Крым-Кровля предполагает огромный выбор услуг по эксплуатации мягкой кровли"/>
        <meta name="keywords" content="ООО Крым Кровля, ООО Крым-Кровля, ООО крым кровля, 
                               крым кровля, Крым кровля, Крым Кровля, 
                               крым кровля Симферополь, Крым кровля Симферополь, Крым Кровля Симферополь,"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="image/logo-roof.svg"/>

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://crimea-roof.ru"/>
        <meta property="og:title" content="ООО Крым-Кровля | Главная"/>
        <meta property="og:description" content="Компания Крым-Кровля предполагает огромный выбор услуг по эксплуатации мягкой кровли. Выезд по Крыму бесплатный. Замеряем и посчитаем стоимость гидроизоляции."/>
        <meta property="og:image" content="https://crimea-roof.ru/_next/image?url=%2Fimage%2FphotoPVH%2Fpvh8.jpg&w=2048&q=80"/>
      </Head>
      <div className="home">
        <Slider/>
        <Estimate/>
        <Gallery/>
        <AboutUs/>
        <Service/>
        <Partners/>
      </div>
    </>
  )
}
