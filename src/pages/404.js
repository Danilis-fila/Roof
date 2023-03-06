import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function NotFoundPage() {
  const route = useRouter();


  const notFound = () => {

    if (route.pathname === '/404') {
      const header = document.querySelector('.header');
      const footer = document.querySelector('.footer');
      console.log(header);
      console.log(footer);
      header.classList.add('header--active-404');
      footer.classList.add('footer--active-404');
    } else {
      const header = document.querySelector('.header');
      const footer = document.querySelector('.footer');
      header.classList.remove('header--active-404');
      footer.classList.remove('footer--active-404');
    }
  }

  useEffect(() => notFound(), [route]);

  return (
    <div className="notFoundPage">

      <div className="notFoundPage__image"></div>

      <h1 className="notFoundPage__title">Такой страницы нет</h1>
      <h2 className="notFoundPage__desc">Зато есть много других страниц об услугах компании</h2>
      <ul className="notFoundPage__link-list">
        <li className="notFoundPage__link"><Link href='/' legacyBehavior><a>Главная</a></Link></li>
        <li className="notFoundPage__link"><Link href='/about_the_company' legacyBehavior><a>О компании</a></Link></li>
        <li className="notFoundPage__link"><Link href='/services' legacyBehavior><a>Услуги</a></Link></li>
        <li className="notFoundPage__link"><Link href='/contacts' legacyBehavior><a>Контакты</a></Link></li>
      </ul>
    </div>
  )
}