import Head from 'next/head'


export default function AboutTheCompany() {
  return (
    <>
      <Head>
        <title>О компании</title>
        <meta name="description" content="Крым-Кровля, Контактное лицо, Телефон, Telegram, Viber, WhatsApp, Контакты, "/>
        <meta name="keywords" content="ООО Крым Кровля, ООО Крым-Кровля, ООО крым кровля, 
                               крым кровля, Крым кровля, Крым Кровля, 
                               крым кровля Симферополь, Крым кровля Симферополь, Крым Кровля Симферополь,"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="image/logo-roof.svg"/>
      </Head>
      
      <div className="aboutTheCompany">
          <div className="aboutTheCompany__wrapper">
              <h1 className="aboutTheCompany__title">О КОМПАНИИ</h1>  
              <h2 className="aboutTheCompany__text">Компания <b>ООО «Крым-Кровля»</b>, ИНН <b>9102035802</b>, ОГРН <b>1149102065067</b></h2>
              <ul className="aboutTheCompany__list">
                  <li className="aboutTheCompany__item">С 2008 года монтируем ПВХ мембраны.</li>
                  <li className="aboutTheCompany__item">Сертифицированы как монтажники у трех ведущих производителей мембран.</li>
                  <li className="aboutTheCompany__item">Закупаем материалы напрямую от представителей заводов.</li>
                  <li className="aboutTheCompany__item">Выполняем работы по гидроизоляции кровли и фундамента любой сложности.</li>
                  <li className="aboutTheCompany__item">Монтаж ПВХ или ТПО мембран производим в соответствии с требованиями нормативных документов, с применением современных технологий и оборудования.</li>
                  <li className="aboutTheCompany__item">Практикуем индивидуальный подход к каждому проекту, проводим консультацию по выбору типа кровли, материала и способа их монтажа.</li>
                  <li className="aboutTheCompany__item">Узкая специализация в сочетании с умением и опытом позволяет нашему предприятию выполнять работу на высшем.</li>
                  <li className="aboutTheCompany__item">Предоставляем гарантию на выполненные работы 5 лет.</li>
              </ul>
              <p className="aboutTheCompany__preface">Уважаемые будущие клиенты - заказчики, буду рад сотрудничать с Вами и предоставить весь спектр услуг по гидроизоляции с применением ПВХ  мембран, ТПО мембран, лайнера для бассейнов . Уверены, что уровень оказываемых  услуг позволит рассчитывать на долгосрочное сотрудничество.</p>
              <p className="aboutTheCompany__text"><b>Контактное лицо:</b></p>
              <p className="aboutTheCompany__text">Сухоцкий Глеб Владимирович</p>
              <p className="aboutTheCompany__text"><b>Email: </b>crimearoof@gmail.com</p>
              <p className="aboutTheCompany__text"><b>Моб.тел: </b>+7(978)809-98-82</p>
          </div>
      </div>
    </>
  )
}
