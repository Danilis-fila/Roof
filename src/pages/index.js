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
        <meta name="robots" content="index, follow" />
        <meta name="description" content="Компания Крым-Кровля предполагает огромный выбор услуг по эксплуатации мягкой кровли"/>
        <meta name="keywords" content="крым кровля, ооо крым кровля, пвх мембрана крым, пвх мембрана симферополь, плоская кровля симферополь, аэратор симферополь, дорожки пвх, гидроизоляция фундамента, гидроизоляция кровли пвх, пвх кровля крыша, гидроизоляция террасы, пвх воронки крым, воронки для плоской кровли, пвх металл, крым кровля пвх, ремонт пвх крым, ремонт плоской кровли крыши, ремонт битумной кровли, дорожки для плоской крыши, эксплуатируемая кровля"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico"/>

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
