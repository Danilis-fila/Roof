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
        <title>Контакты</title>
        <meta name="description" content="Крым-Кровля, Наша кровля в Симферополе, Севастополе, Ялте, Алуште, Керчи, Крыму. Телефон, Telegram, Viber, WhatsApp, Контакты"/>
        <meta name="keywords" content="ООО Крым Кровля, ООО Крым-Кровля, ООО крым кровля, 
                               крым кровля, Крым кровля, Крым Кровля, 
                               крым кровля Симферополь, Крым кровля Симферополь, Крым Кровля Симферополь,"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="image/logo-roof.svg"/>
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
                <a className="contacts__element-tel" href="tel:+79788099882">+7(978)809-98-82</a>  
              </div>

              <div className="contacts__element">
                <div className="contacts__element-title">E-mail:</div>
                <a className="contacts__element-email" href='mailto:crimearoof@gmail.com'>crimearoof@gmail.com</a>  
              </div>

              <div className="contacts__element">
                <div className="contacts__element-title">Режим работы:</div>
                <div className="contacts__element-desc">пн–сб: 9:00–19:00 вс: выходной</div>  
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
