import React, { useEffect, useCallback, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper';

import 'swiper/css/autoplay';


export default function Services() {
  const [thumbsSwiper1, setThumbsSwiper1] = useState(null);
  const [thumbsSwiper2, setThumbsSwiper2] = useState(null);
  const [thumbsSwiper3, setThumbsSwiper3] = useState(null);
  const [thumbsSwiper4, setThumbsSwiper4] = useState(null);
  const [thumbsSwiper5, setThumbsSwiper5] = useState(null);
  const [thumbsSwiper6, setThumbsSwiper6] = useState(null);

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
        <meta name="description" content="Добро пожаловать на сайт Крым кровля в Симферополе, мы предлагаем дешевую установку и продажу высококачественных ПВХ мембран в Крыму. Кровля Симферополь, Крым"/>
        <meta name="keywords" content="крым кровля, крым кровля симферополь, мягкая мембрана, мягкая мембрана для кровли, гидроизоляция мягкой мембраной, материалы для гидроизоляции, мягкая мембрана для фасада, качественная мягкая мембрана, компания занимающаяся мягкой мембраной, гидроизоляционные работы, монтаж мягкой мембраны, дешевая пвх мембрана, пвх кровли низкой стоимости, пвх кровельные материалы, пвх кровельные покрытия, гидроизоляционные работы, кровельные работы, установка гибкого покрытия, водонепроницаемая кровля, монтаж ПВХ мембраны"/> 
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico"/>
        <meta property="og:url" content="https://crimea-roof.ru/services"/>
        <meta property="og:title" content="ООО Крым-Кровля | Услуги"/>
        <meta property="og:description" content="Огромный выбор услуг по эксплуатации мягкой кровли в Крыму. Услуги по эксплуатации мягкой кровли"/>
        <meta property="og:image" content="https://crimea-roof.ru/_next/static/media/logo-roof.32886752.svg"/>
      </Head>
      <div className="services">
          <div className="services__mainTitle">
              <h1 className="services__title">УСЛУГИ</h1>
          </div>

          <div className='services__wrapper'>
            <div className='services__items'>
              
            <div className='services__item' data-scroll="true">
            <div className='services__item-swiper'>
            <Swiper style={{'--swiper-navigation-color': '#FE8702', '--swiper-pagination-color': '#FE8702'}} spaceBetween={10} navigation={true} thumbs={{swiper: thumbsSwiper1 && !thumbsSwiper1.destroyed ? thumbsSwiper1 : null}} modules={[FreeMode, Navigation, Thumbs]} className="mySwiper2">                
              <SwiperSlide>
                <Image placeholder="blur" blurDataURL="/image/Крым-Кровля-Blur.png" alt="Обновите страницу..." src={"/image/photoPVH/pvh57.webp"}  quality={80}  width={1000} height={1000}></Image>
              </SwiperSlide>
              <SwiperSlide>
                <Image placeholder="blur" blurDataURL="/image/Крым-Кровля-Blur.png" alt="Обновите страницу..." src={"/image/photoPVH/pvh58.webp"}  quality={80}  width={1000} height={1000}></Image>
              </SwiperSlide>
              <SwiperSlide>
                <Image placeholder="blur" blurDataURL="/image/Крым-Кровля-Blur.png" alt="Обновите страницу..." src={"/image/photoPVH/pvh59.webp"}  quality={80}  width={1000} height={1000}></Image>
              </SwiperSlide>
              <SwiperSlide>
                <Image placeholder="blur" blurDataURL="/image/Крым-Кровля-Blur.png" alt="Обновите страницу..." src={"/image/photoPVH/pvh60.webp"}  quality={80}  width={1000} height={1000}></Image>
              </SwiperSlide>
              <SwiperSlide>
                <Image placeholder="blur" blurDataURL="/image/Крым-Кровля-Blur.png" alt="Обновите страницу..." src={"/image/photoPVH/pvh61.webp"}  quality={80}  width={1000} height={1000}></Image>
              </SwiperSlide>
              <SwiperSlide>
                <Image placeholder="blur" blurDataURL="/image/Крым-Кровля-Blur.png" alt="Обновите страницу..." src={"/image/photoPVH/pvh62.webp"}  quality={80}  width={1000} height={1000}></Image>
              </SwiperSlide>
              <SwiperSlide>
                <Image placeholder="blur" blurDataURL="/image/Крым-Кровля-Blur.png" alt="Обновите страницу..." src={"/image/photoPVH/pvh63.webp"}  quality={80}  width={1000} height={1000}></Image>
              </SwiperSlide>
              <SwiperSlide>
                <Image placeholder="blur" blurDataURL="/image/Крым-Кровля-Blur.png" alt="Обновите страницу..." src={"/image/photoPVH/pvh64.webp"}  quality={80}  width={1000} height={1000}></Image>
              </SwiperSlide>
            </Swiper>
  
            <Swiper onSwiper={setThumbsSwiper1} spaceBetween={10} slidesPerView={4} freeMode={true} watchSlidesProgress={true} modules={[FreeMode, Navigation, Thumbs]} className="mySwiper" breakpoints={{1024: {slidesPerView: 4}, 555: {slidesPerView: 3}, 100: { slidesPerView: 2}}}>
            <SwiperSlide>
                <Image placeholder="blur" blurDataURL="/image/Крым-Кровля-Blur.png" alt="Обновите страницу..." src={"/image/photoPVH/pvh57.webp"}  quality={80}  width={1000} height={1000}></Image>
              </SwiperSlide>
              <SwiperSlide>
                <Image placeholder="blur" blurDataURL="/image/Крым-Кровля-Blur.png" alt="Обновите страницу..." src={"/image/photoPVH/pvh58.webp"}  quality={80}  width={1000} height={1000}></Image>
              </SwiperSlide>
              <SwiperSlide>
                <Image placeholder="blur" blurDataURL="/image/Крым-Кровля-Blur.png" alt="Обновите страницу..." src={"/image/photoPVH/pvh59.webp"}  quality={80}  width={1000} height={1000}></Image>
              </SwiperSlide>
              <SwiperSlide>
                <Image placeholder="blur" blurDataURL="/image/Крым-Кровля-Blur.png" alt="Обновите страницу..." src={"/image/photoPVH/pvh60.webp"}  quality={80}  width={1000} height={1000}></Image>
              </SwiperSlide>
              <SwiperSlide>
                <Image placeholder="blur" blurDataURL="/image/Крым-Кровля-Blur.png" alt="Обновите страницу..." src={"/image/photoPVH/pvh61.webp"}  quality={80}  width={1000} height={1000}></Image>
              </SwiperSlide>
              <SwiperSlide>
                <Image placeholder="blur" blurDataURL="/image/Крым-Кровля-Blur.png" alt="Обновите страницу..." src={"/image/photoPVH/pvh62.webp"}  quality={80}  width={1000} height={1000}></Image>
              </SwiperSlide>
              <SwiperSlide>
                <Image placeholder="blur" blurDataURL="/image/Крым-Кровля-Blur.png" alt="Обновите страницу..." src={"/image/photoPVH/pvh63.webp"}  quality={80}  width={1000} height={1000}></Image>
              </SwiperSlide>
              <SwiperSlide>
                <Image placeholder="blur" blurDataURL="/image/Крым-Кровля-Blur.png" alt="Обновите страницу..." src={"/image/photoPVH/pvh64.webp"}  quality={80}  width={1000} height={1000}></Image>
              </SwiperSlide>
            </Swiper>
            </div> 
                <div className='services__item-text'>
                <h2 className='services__item-title'>Устройство мембранной кровли</h2>
                <h2 className='services__item-desc'>Устройство мембранной кровли требует профессионального подхода и опытных специалистов. Наша компания предлагает высококачественные услуги по установке и обслуживанию мембранной кровли для обеспечения долговечной и надежной защиты вашего здания. Обратитесь к нам, и мы с удовольствием поможем вам с решением ваших потребностей в мембранной кровле.</h2>
            </div>
          </div>




        
          <div className='services__item' data-scroll="true">
            <div className='services__item-swiper'>
            <Swiper style={{'--swiper-navigation-color': '#FE8702', '--swiper-pagination-color': '#FE8702'}} spaceBetween={10} navigation={true} thumbs={{swiper: thumbsSwiper2 && !thumbsSwiper2.destroyed ? thumbsSwiper2 : null}} modules={[FreeMode, Navigation, Thumbs]} className="mySwiper2">                
              <SwiperSlide>
                <Image placeholder="blur" blurDataURL="/image/Крым-Кровля-Blur.png" alt="Обновите страницу..." src={"/image/photoPVH/pvh69.webp"}  quality={80}  width={1000} height={1000}></Image>
              </SwiperSlide>
              <SwiperSlide>
                <Image placeholder="blur" blurDataURL="/image/Крым-Кровля-Blur.png" alt="Обновите страницу..." src={"/image/photoPVH/pvh66.webp"}  quality={80}  width={1000} height={1000}></Image>
              </SwiperSlide>
              <SwiperSlide>
                <Image placeholder="blur" blurDataURL="/image/Крым-Кровля-Blur.png" alt="Обновите страницу..." src={"/image/photoPVH/pvh67.webp"}  quality={80}  width={1000} height={1000}></Image>
              </SwiperSlide>
              <SwiperSlide>
                <Image placeholder="blur" blurDataURL="/image/Крым-Кровля-Blur.png" alt="Обновите страницу..." src={"/image/photoPVH/pvh68.webp"}  quality={80}  width={1000} height={1000}></Image>
              </SwiperSlide>
              <SwiperSlide>
                <Image placeholder="blur" blurDataURL="/image/Крым-Кровля-Blur.png" alt="Обновите страницу..." src={"/image/photoPVH/pvh65.webp"}  quality={80}  width={1000} height={1000}></Image>
              </SwiperSlide>
            </Swiper>
  
            <Swiper onSwiper={setThumbsSwiper2} spaceBetween={10} slidesPerView={4} freeMode={true} watchSlidesProgress={true} modules={[FreeMode, Navigation, Thumbs]} className="mySwiper" breakpoints={{1024: {slidesPerView: 4}, 555: {slidesPerView: 3}, 100: { slidesPerView: 2}}}>
            <SwiperSlide>
                <Image placeholder="blur" blurDataURL="/image/Крым-Кровля-Blur.png" alt="Обновите страницу..." src={"/image/photoPVH/pvh69.webp"}  quality={80}  width={1000} height={1000}></Image>
              </SwiperSlide>
              <SwiperSlide>
                <Image placeholder="blur" blurDataURL="/image/Крым-Кровля-Blur.png" alt="Обновите страницу..." src={"/image/photoPVH/pvh66.webp"}  quality={80}  width={1000} height={1000}></Image>
              </SwiperSlide>
              <SwiperSlide>
                <Image placeholder="blur" blurDataURL="/image/Крым-Кровля-Blur.png" alt="Обновите страницу..." src={"/image/photoPVH/pvh67.webp"}  quality={80}  width={1000} height={1000}></Image>
              </SwiperSlide>
              <SwiperSlide>
                <Image placeholder="blur" blurDataURL="/image/Крым-Кровля-Blur.png" alt="Обновите страницу..." src={"/image/photoPVH/pvh68.webp"}  quality={80}  width={1000} height={1000}></Image>
              </SwiperSlide>
              <SwiperSlide>
                <Image placeholder="blur" blurDataURL="/image/Крым-Кровля-Blur.png" alt="Обновите страницу..." src={"/image/photoPVH/pvh65.webp"}  quality={80}  width={1000} height={1000}></Image>
              </SwiperSlide>
            </Swiper>
            </div> 
                <div className='services__item-text'>
                <h2 className='services__item-title'>Утепление кровли с разуклонкой</h2>
                <h2 className='services__item-desc'>Изготавливаем плиты с уклоном из утеплителя необходимого уклона и толщины самостоятельно, что позволяет вам экономить этом при покупке заводского уклон образующего утеплителя, который намного дороже</h2>
            </div>
          </div>




          <div className='services__item' data-scroll="true">
            <div className='services__item-swiper'>
            <Swiper style={{'--swiper-navigation-color': '#FE8702', '--swiper-pagination-color': '#FE8702'}} spaceBetween={10} navigation={true} thumbs={{swiper: thumbsSwiper3 && !thumbsSwiper3.destroyed ? thumbsSwiper3 : null}} modules={[FreeMode, Navigation, Thumbs]} className="mySwiper2">                
              <SwiperSlide>
                <Image placeholder="blur" blurDataURL="/image/Крым-Кровля-Blur.png" alt="Обновите страницу..." src={"/image/photoPVH/pvh71.webp"}  quality={80}  width={1000} height={1000}></Image>
              </SwiperSlide>
              <SwiperSlide>
                <Image placeholder="blur" blurDataURL="/image/Крым-Кровля-Blur.png" alt="Обновите страницу..." src={"/image/photoPVH/pvh70.webp"}  quality={80}  width={1000} height={1000}></Image>
              </SwiperSlide>
              <SwiperSlide>
                <Image placeholder="blur" blurDataURL="/image/Крым-Кровля-Blur.png" alt="Обновите страницу..." src={"/image/photoPVH/pvh72.webp"}  quality={80}  width={1000} height={1000}></Image>
              </SwiperSlide>
              <SwiperSlide>
                <Image placeholder="blur" blurDataURL="/image/Крым-Кровля-Blur.png" alt="Обновите страницу..." src={"/image/photoPVH/pvh73.webp"}  quality={80}  width={1000} height={1000}></Image>
              </SwiperSlide>
              <SwiperSlide>
                <Image placeholder="blur" blurDataURL="/image/Крым-Кровля-Blur.png" alt="Обновите страницу..." src={"/image/photoPVH/pvh74.webp"}  quality={80}  width={1000} height={1000}></Image>
              </SwiperSlide>
            </Swiper>
  
            <Swiper onSwiper={setThumbsSwiper3} spaceBetween={10} slidesPerView={4} freeMode={true} watchSlidesProgress={true} modules={[FreeMode, Navigation, Thumbs]} className="mySwiper"  breakpoints={{1024: {slidesPerView: 4}, 555: {slidesPerView: 3}, 100: { slidesPerView: 2}}}>
            <SwiperSlide>
                <Image placeholder="blur" blurDataURL="/image/Крым-Кровля-Blur.png" alt="Обновите страницу..." src={"/image/photoPVH/pvh71.webp"}  quality={80}  width={1000} height={1000}></Image>
              </SwiperSlide>
              <SwiperSlide>
                <Image placeholder="blur" blurDataURL="/image/Крым-Кровля-Blur.png" alt="Обновите страницу..." src={"/image/photoPVH/pvh70.webp"}  quality={80}  width={1000} height={1000}></Image>
              </SwiperSlide>
              <SwiperSlide>
                <Image placeholder="blur" blurDataURL="/image/Крым-Кровля-Blur.png" alt="Обновите страницу..." src={"/image/photoPVH/pvh72.webp"}  quality={80}  width={1000} height={1000}></Image>
              </SwiperSlide>
              <SwiperSlide>
                <Image placeholder="blur" blurDataURL="/image/Крым-Кровля-Blur.png" alt="Обновите страницу..." src={"/image/photoPVH/pvh73.webp"}  quality={80}  width={1000} height={1000}></Image>
              </SwiperSlide>
              <SwiperSlide>
                <Image placeholder="blur" blurDataURL="/image/Крым-Кровля-Blur.png" alt="Обновите страницу..." src={"/image/photoPVH/pvh74.webp"}  quality={80}  width={1000} height={1000}></Image>
              </SwiperSlide>
            </Swiper>
            </div> 
                <div className='services__item-text'>
                <h2 className='services__item-title'>Устройство эксплуатируемой кровли из ПВХ мембраны</h2>
                <h2 className='services__item-desc'>Наша команда профессионалов обеспечит полный цикл работ, включающих подготовку поверхности, укладку мембран, герметизацию соединений и создание эффективной системы отвода воды. Мы используем только высококачественные ПВХ мембраны, которые гарантируют надежность, долговечность и непроницаемость для влаги.</h2>
            </div>
          </div>



          <div className='services__item' data-scroll="true">
            <div className='services__item-swiper'>
            <Swiper style={{'--swiper-navigation-color': '#FE8702', '--swiper-pagination-color': '#FE8702'}} spaceBetween={10} navigation={true} thumbs={{swiper: thumbsSwiper4 && !thumbsSwiper4.destroyed ? thumbsSwiper4 : null}} modules={[FreeMode, Navigation, Thumbs]} className="mySwiper2">                
              <SwiperSlide>
                <Image placeholder="blur" blurDataURL="/image/Крым-Кровля-Blur.png" alt="Обновите страницу..." src={"/image/photoPVH/pvh53.webp"}  quality={80}  width={1000} height={1000}></Image>
              </SwiperSlide>
              <SwiperSlide>
                <Image placeholder="blur" blurDataURL="/image/Крым-Кровля-Blur.png" alt="Обновите страницу..." src={"/image/photoPVH/pvh52.webp"}  quality={80}  width={1000} height={1000}></Image>
              </SwiperSlide>
              <SwiperSlide>
                <Image placeholder="blur" blurDataURL="/image/Крым-Кровля-Blur.png" alt="Обновите страницу..." src={"/image/photoPVH/pvh33.webp"}  quality={80}  width={1000} height={1000}></Image>
              </SwiperSlide>
            </Swiper>
  
            <Swiper onSwiper={setThumbsSwiper4} spaceBetween={10} slidesPerView={4} freeMode={true} watchSlidesProgress={true} modules={[FreeMode, Navigation, Thumbs]} className="mySwiper"  breakpoints={{1024: {slidesPerView: 4}, 555: {slidesPerView: 3}, 100: { slidesPerView: 2}}}>
            <SwiperSlide>
                <Image placeholder="blur" blurDataURL="/image/Крым-Кровля-Blur.png" alt="Обновите страницу..." src={"/image/photoPVH/pvh53.webp"}  quality={80}  width={1000} height={1000}></Image>
              </SwiperSlide>
              <SwiperSlide>
                <Image placeholder="blur" blurDataURL="/image/Крым-Кровля-Blur.png" alt="Обновите страницу..." src={"/image/photoPVH/pvh52.webp"}  quality={80}  width={1000} height={1000}></Image>
              </SwiperSlide>
              <SwiperSlide>
                <Image placeholder="blur" blurDataURL="/image/Крым-Кровля-Blur.png" alt="Обновите страницу..." src={"/image/photoPVH/pvh33.webp"}  quality={80}  width={1000} height={1000}></Image>
              </SwiperSlide>
            </Swiper>
            </div> 
                <div className='services__item-text'>
                <h2 className='services__item-title'>Устройство гидроизоляции подземных сооружений ПВХ мембраной</h2>
                <h2 className='services__item-desc'>Мы предоставляем услугу по устройству гидроизоляции подземных сооружений с использованием ПВХ мембраны. Наша команда специалистов имеет опыт в установке и обслуживании герметичных систем гидроизоляции для различных подземных сооружений, включая погреба, подвалы, туннели, колодцы и другие объекты.</h2>
            </div>
          </div>



          <div className='services__item' data-scroll="true">
            <div className='services__item-swiper'>
            <Swiper style={{'--swiper-navigation-color': '#FE8702', '--swiper-pagination-color': '#FE8702'}} spaceBetween={10} navigation={true} thumbs={{swiper: thumbsSwiper5 && !thumbsSwiper5.destroyed ? thumbsSwiper5 : null}} modules={[FreeMode, Navigation, Thumbs]} className="mySwiper2">                
              <SwiperSlide>
                <Image placeholder="blur" blurDataURL="/image/Крым-Кровля-Blur.png" alt="Обновите страницу..." src={"/image/photoPVH/pvh75.webp"}  quality={80}  width={1000} height={1000}></Image>
              </SwiperSlide>
              <SwiperSlide>
                <Image placeholder="blur" blurDataURL="/image/Крым-Кровля-Blur.png" alt="Обновите страницу..." src={"/image/photoPVH/pvh76.webp"}  quality={80}  width={1000} height={1000}></Image>
              </SwiperSlide>
              <SwiperSlide>
                <Image placeholder="blur" blurDataURL="/image/Крым-Кровля-Blur.png" alt="Обновите страницу..." src={"/image/photoPVH/pvh77.webp"}  quality={80}  width={1000} height={1000}></Image>
              </SwiperSlide>
            </Swiper>
  
            <Swiper onSwiper={setThumbsSwiper5} spaceBetween={10} slidesPerView={4} freeMode={true} watchSlidesProgress={true} modules={[FreeMode, Navigation, Thumbs]} className="mySwiper"  breakpoints={{1024: {slidesPerView: 4}, 555: {slidesPerView: 3}, 100: { slidesPerView: 2}}}>
            <SwiperSlide>
                <Image placeholder="blur" blurDataURL="/image/Крым-Кровля-Blur.png" alt="Обновите страницу..." src={"/image/photoPVH/pvh75.webp"}  quality={80}  width={1000} height={1000}></Image>
              </SwiperSlide>
              <SwiperSlide>
                <Image placeholder="blur" blurDataURL="/image/Крым-Кровля-Blur.png" alt="Обновите страницу..." src={"/image/photoPVH/pvh76.webp"}  quality={80}  width={1000} height={1000}></Image>
              </SwiperSlide>
              <SwiperSlide>
                <Image placeholder="blur" blurDataURL="/image/Крым-Кровля-Blur.png" alt="Обновите страницу..." src={"/image/photoPVH/pvh77.webp"}  quality={80}  width={1000} height={1000}></Image>
              </SwiperSlide>
            </Swiper>
            </div> 
                <div className='services__item-text'>
                <h2 className='services__item-title'>Ремонт и реконструкция мембранной кровли</h2>
                <h2 className='services__item-desc'>В случае реконструкции мембранной кровли, наша команда проведет анализ состояния кровли и разработает оптимальное решение для восстановления и улучшения ее функциональности. Мы гарантируем качественное выполнение работ по ремонту и реконструкции мембранной кровли, что поможет продлить ее срок службы и обеспечить надежную защиту вашего здания от влаги и других негативных воздействий.</h2>
            </div>
          </div>



          
          <div className='services__item' data-scroll="true">
            <div className='services__item-swiper'>
            <Swiper style={{'--swiper-navigation-color': '#FE8702', '--swiper-pagination-color': '#FE8702'}} spaceBetween={10} navigation={true} thumbs={{swiper: thumbsSwiper6 && !thumbsSwiper6.destroyed ? thumbsSwiper6 : null}} modules={[FreeMode, Navigation, Thumbs]} className="mySwiper2">                
            <SwiperSlide>
                <Image placeholder="blur" blurDataURL="/image/Крым-Кровля-Blur.png" alt="Обновите страницу..." src={"/image/photoPVH/pvh40.webp"}  quality={80}  width={1000} height={1000}></Image>
              </SwiperSlide>
              <SwiperSlide>
                <Image placeholder="blur" blurDataURL="/image/Крым-Кровля-Blur.png" alt="Обновите страницу..." src={"/image/photoPVH/pvh41.webp"}  quality={80}  width={1000} height={1000}></Image>
              </SwiperSlide>
              <SwiperSlide>
                <Image placeholder="blur" blurDataURL="/image/Крым-Кровля-Blur.png" alt="Обновите страницу..." src={"/image/photoPVH/pvh36.webp"}  quality={80}  width={1000} height={1000}></Image>
              </SwiperSlide>
              <SwiperSlide>
                <Image placeholder="blur" blurDataURL="/image/Крым-Кровля-Blur.png" alt="Обновите страницу..." src={"/image/photoPVH/pvh37.webp"}  quality={80}  width={1000} height={1000}></Image>
              </SwiperSlide>
              <SwiperSlide>
                <Image placeholder="blur" blurDataURL="/image/Крым-Кровля-Blur.png" alt="Обновите страницу..." src={"/image/photoPVH/pvh38.webp"}  quality={80}  width={1000} height={1000}></Image>
              </SwiperSlide>
              <SwiperSlide>
                <Image placeholder="blur" blurDataURL="/image/Крым-Кровля-Blur.png" alt="Обновите страницу..." src={"/image/photoPVH/pvh39.webp"}  quality={80}  width={1000} height={1000}></Image>
              </SwiperSlide>              
              <SwiperSlide>
                <Image placeholder="blur" blurDataURL="/image/Крым-Кровля-Blur.png" alt="Обновите страницу..." src={"/image/photoPVH/pvh34.webp"}  quality={80}  width={1000} height={1000}></Image>
              </SwiperSlide>
              <SwiperSlide>
                <Image placeholder="blur" blurDataURL="/image/Крым-Кровля-Blur.png" alt="Обновите страницу..." src={"/image/photoPVH/pvh35.webp"}  quality={80}  width={1000} height={1000}></Image>
              </SwiperSlide>
            </Swiper>
  
            <Swiper onSwiper={setThumbsSwiper6} spaceBetween={10} slidesPerView={4} freeMode={true} watchSlidesProgress={true} modules={[FreeMode, Navigation, Thumbs]} className="mySwiper"  breakpoints={{1024: {slidesPerView: 4}, 555: {slidesPerView: 3}, 100: { slidesPerView: 2}}}>
            <SwiperSlide>
                <Image placeholder="blur" blurDataURL="/image/Крым-Кровля-Blur.png" alt="Обновите страницу..." src={"/image/photoPVH/pvh40.webp"}  quality={80}  width={1000} height={1000}></Image>
              </SwiperSlide>
              <SwiperSlide>
                <Image placeholder="blur" blurDataURL="/image/Крым-Кровля-Blur.png" alt="Обновите страницу..." src={"/image/photoPVH/pvh41.webp"}  quality={80}  width={1000} height={1000}></Image>
              </SwiperSlide>
              <SwiperSlide>
                <Image placeholder="blur" blurDataURL="/image/Крым-Кровля-Blur.png" alt="Обновите страницу..." src={"/image/photoPVH/pvh36.webp"}  quality={80}  width={1000} height={1000}></Image>
              </SwiperSlide>
              <SwiperSlide>
                <Image placeholder="blur" blurDataURL="/image/Крым-Кровля-Blur.png" alt="Обновите страницу..." src={"/image/photoPVH/pvh37.webp"}  quality={80}  width={1000} height={1000}></Image>
              </SwiperSlide>
              <SwiperSlide>
                <Image placeholder="blur" blurDataURL="/image/Крым-Кровля-Blur.png" alt="Обновите страницу..." src={"/image/photoPVH/pvh38.webp"}  quality={80}  width={1000} height={1000}></Image>
              </SwiperSlide>
              <SwiperSlide>
                <Image placeholder="blur" blurDataURL="/image/Крым-Кровля-Blur.png" alt="Обновите страницу..." src={"/image/photoPVH/pvh39.webp"}  quality={80}  width={1000} height={1000}></Image>
              </SwiperSlide>              
              <SwiperSlide>
                <Image placeholder="blur" blurDataURL="/image/Крым-Кровля-Blur.png" alt="Обновите страницу..." src={"/image/photoPVH/pvh34.webp"}  quality={80}  width={1000} height={1000}></Image>
              </SwiperSlide>
              <SwiperSlide>
                <Image placeholder="blur" blurDataURL="/image/Крым-Кровля-Blur.png" alt="Обновите страницу..." src={"/image/photoPVH/pvh35.webp"}  quality={80}  width={1000} height={1000}></Image>
              </SwiperSlide>
            </Swiper>
            </div> 
                <div className='services__item-text'>
                <h2 className='services__item-title'>Реконструкция битумной кровли на мембранную</h2>
                <h2 className='services__item-desc'>В ходе реконструкции мы проведем детальную оценку состояния вашей битумной кровли и разработаем план замены на мембранную систему. Мы осуществим не только снятие старой кровли, но и подготовку основания, установку новых мембран и необходимых аксессуаров, а также герметизацию стыков и деталей.</h2>
            </div>
          </div>



            </div>
          </div>
      </div>
    </> 
  )
}