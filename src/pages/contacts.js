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
        <title>Крым Кровля | Контакты</title>
        <meta name="robots" content="index, follow" />
        <meta name="description" content="Добро пожаловать на сайт крым кровля в симферополе, посвященный ПВХ кровлям — идеальному решению для вашей крыши. Мы предлагаем качественные и долговечные ПВХ кровельные системы, созданные с использованием современных материалов. Наши профессиональные услуги и широкий выбор продукции позволят вам надежно защитить ваш дом от непогоды и сохранить его красоту на протяжении многих лет. Обратитесь к нам уже сегодня и узнайте, как ПВХ кровли могут улучшить ваше жилище."/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico"/>
        <meta name="keywords" content="крым кровля, крым кровля симферополь, мягкая кровля, кровля симферополь, кровельные работы, крыша из пвх мембраны, крым кровля, крыша крым, из чего сделать крышу, сделать кровлю, чем перекрыть крышу, что такое пвх мембрана"/>
        <meta property="og:url" content="https://crimea-roof.ru/contacts"/>
        <meta property="og:title" content="ООО Крым-Кровля | Контакты"/>
        <meta property="og:description" content="Контактное лицо, Телефон, Telegram, Viber, WhatsApp, Контакты"/>
        <meta property="og:image" content="https://crimea-roof.ru/_next/static/media/logo-roof.32886752.svg"/>
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
