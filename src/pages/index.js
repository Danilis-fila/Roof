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
        {/* <meta name="keywords" content="крым кровля, ооо крым кровля, пвх мембрана крым, пвх мембрана симферополь, плоская кровля симферополь, аэратор симферополь, дорожки пвх, гидроизоляция фундамента, гидроизоляция кровли пвх, пвх кровля крыша, гидроизоляция террасы, пвх воронки крым, воронки для плоской кровли, пвх металл, крым кровля пвх, ремонт пвх крым, ремонт плоской кровли крыши, ремонт битумной кровли, дорожки для плоской крыши, эксплуатируемая кровля"/> */}
        <meta name="keywords" content="мягкая кровля, кровля симферополь, кровельные работы, крыша из пвх мембраны, крым кровля, крыша крым, рулонная кровля, эксплуатируемая кровля, из чего сделать крышу, гидроизоляция симферополь, гидроизоляция крыши, пвх крым, пвх мембрана, сделать кровлю, чем перекрыть крышу, что такое пвх мембрана, бюджетная крыша, крыша не дорого, теплая крыша, мембрана технониколь, пвх"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="https://crimea-roof.ru/favicon.ico" type="image/x-icon"/>
        <link rel="shortcut icon" href="https://crimea-roof.ru/favicon.ico" />

        <meta property="og:url" content="https://crimea-roof.ru"/>
        <meta property="og:title" content="ООО Крым-Кровля | Главная"/>
        <meta property="og:description" content="Компания Крым-Кровля предполагает огромный выбор услуг по эксплуатации мягкой кровли. Выезд по Крыму бесплатный. Замеряем и посчитаем стоимость гидроизоляции."/>
        <meta property="og:image" content="https://crimea-roof.ru/_next/static/media/logo-roof.32886752.svg"/>

        <meta property="twitter:title" content="ООО Крым-Кровля | Главная"/>
        <meta property="twitter:description" content="Компания Крым-Кровля предполагает огромный выбор услуг по эксплуатации мягкой кровли"/>
        <meta property="twitter:card" content="https://crimea-roof.ru/_next/static/media/logo-roof.32886752.svg"/>
        <meta property="twitter:image" content="https://crimea-roof.ru/_next/static/media/logo-roof.32886752.svg"/>
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
