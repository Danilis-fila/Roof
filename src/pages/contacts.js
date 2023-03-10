import Head from 'next/head';
import { YMaps, Map, Placemark, RulerControl, TypeSelector, ZoomControl } from "@pbe/react-yandex-maps";

export default function Contacts() {

  const defaultState = {
    center: [44.948227, 34.100264], 
    zoom: 8
  };

  return (
    <>
      <Head>
        <title>about_the_company</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="contacts">
        <div className="contacts__wrapper">
          <h1 className="contacts__title">КОНТАКТЫ</h1>
          <div className="contacts__inner">
            <div className="contacts__elements">
              <div className="contacts__element">
                <div className="contacts__element-title">Адрес:</div>
                <div className="contacts__element-desc">Крым, г.Симферополь</div>  
              </div>

              <div className="contacts__element">
                <div className="contacts__element-title">Телефон, Viber, Whatsapp:</div>
                <div className="contacts__element-desc">+7(978)809-98-82</div>  
              </div>

              <div className="contacts__element">
                <div className="contacts__element-title">E-mail:</div>
                <div className="contacts__element-desc">crimearoof@gmail.com</div>  
              </div>

              <div className="contacts__element">
                <div className="contacts__element-title">Режим работы:</div>
                <div className="contacts__element-desc">пн–сб: 08:00–19:00 вс: выходной</div>  
              </div>
            </div>

            <div className="contacts__map">
              <YMaps>
                <Map  height={'90%'} width={'100%'}  defaultState={defaultState}>
                  <RulerControl/>
                  <TypeSelector/>
                  <ZoomControl/>
                  <Placemark geometry={[44.917973, 34.072084]}/>
                </Map>
              </YMaps>
            </div>
          </div>
        </div>   
    </div>
    </>
  )
}