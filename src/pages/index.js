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
        <meta name="description" content="Добро пожаловать на сайт крым кровля в симферополе, посвященный ПВХ кровлям — идеальному решению для вашей крыши. Мы предлагаем качественные и долговечные ПВХ кровельные системы, созданные с использованием современных материалов. Наши профессиональные услуги и широкий выбор продукции позволят вам надежно защитить ваш дом от непогоды и сохранить его красоту на протяжении многих лет. Обратитесь к нам уже сегодня и узнайте, как ПВХ кровли могут улучшить ваше жилище."/>
        <meta name="keywords" content="
        крым кровля, 
        крым кровля симферополь,
        крыша недорого,
        монтаж кровли в крыму
        пвх кровля - долговечность и надежность, 
                                       качественные пвх кровли по доступным ценам, 
                                       современные материалы для ПВХ кровельных систем, 
                                       преимущества пвх кровельных покрытий,
                                       профессиональная установка ПВХ кровли,
                                       долговечность пвх покрытий для кровли,
                                       энергоэффективность и экологичность пвх кровельных систем,
                                       пвх кровли - оптимальное решение для любого климата,
                                       практичность и долговечность пвх кровельных покрытий,
                                       инновационные пвх кровельные решения для защиты вашего дома"/>
       
       
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
