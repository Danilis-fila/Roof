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
        <meta name="description" content="Добро пожаловать на сайт Крым кровля в Симферополе, мы предлагаем дешевую установку и продажу высококачественных ПВХ мембран в Крыму. Кровля Симферополь, Крым"/>
        <meta name="keywords" content="крым кровля, крым кровля симферополь, мягкая мембрана, мягкая мембрана для кровли, гидроизоляция мягкой мембраной, материалы для гидроизоляции, мягкая мембрана для фасада, качественная мягкая мембрана, компания занимающаяся мягкой мембраной, гидроизоляционные работы, монтаж мягкой мембраны, дешевая пвх мембрана, пвх кровли низкой стоимости, пвх кровельные материалы, пвх кровельные покрытия, гидроизоляционные работы, кровельные работы, установка гибкого покрытия, водонепроницаемая кровля, монтаж ПВХ мембраны"/>       
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
