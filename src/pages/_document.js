import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <>
     <Head>
        <title>О компании</title>
        <meta name="description" content="Крым-Кровля, Контактное лицо, Телефон, Telegram, Viber, WhatsApp, Контакты, "/>
        <meta name="keywords" content="Крым-Кровля, крым кровля, ООО Крым Кровля, ПВХ мембрана Крым, ПВХ мембрана Симферополь, Плоская кровля Симферополь, 
                                      Аэратор Симферополь, Дорожки ПВХ, Мембрана plastfoil пластфоил, Гидроизоляция фундамента, Гидроизоляция кровли ПВХ,
                                      ПВХ кровля крыша, Гидроизоляция террасы, ПВХ воронки Крым, Воронки для плоской кровли, ПВХ металл, Крым Кровля ПВХ,
                                      Ремонт ПВХ Крым, Ремонт плоской кровли крыши, Ремонт битумной кровли, Дорожки для плоской крыши, Эксплуатируемая кровля"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="image/logo-roof.svg"/>
      </Head>
      <Html lang="en">
        <Head />
        <body className='body'>
          <Main />
          <NextScript />
        </body>
      </Html>
    </>
  )
}
