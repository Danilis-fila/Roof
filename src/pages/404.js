import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function NotFoundPage() {
  
  const route = useRouter();
  const [path, setPath] = useState("/404");


  const notFound = () => {

    const header = document.querySelector('.header');
    const footer = document.querySelector('.footer2');
    console.log(path);
    if (path === '/404') {
      header.classList.add('header--active-404');
      footer.classList.add('footer2--active-404');
    } else {
      header.classList.remove('header--active-404');
      footer.classList.remove('footer2--active-404');
    }

  }

  useEffect(() => notFound(), [path]);

  return (
    <div className="notFoundPage">

      <div className="notFoundPage__image"></div>

      <h1 className="notFoundPage__title">Такой страницы нет</h1>
      <h2 className="notFoundPage__desc">Зато есть много других страниц об услугах компании</h2>
      <ul className="notFoundPage__link-list">
        <li className="notFoundPage__link"><Link href='/' legacyBehavior><a onClick={() => setPath("/")}>Главная</a></Link></li>
        <li className="notFoundPage__link"><Link href='/about_the_company' legacyBehavior><a onClick={() => setPath("/about_the_company")}>О компании</a></Link></li>
        <li className="notFoundPage__link"><Link href='/services' legacyBehavior><a onClick={() => setPath("/services")}>Услуги</a></Link></li>
        <li className="notFoundPage__link"><Link href='/contacts' legacyBehavior><a onClick={() => setPath("/contacts")}>Контакты</a></Link></li>
      </ul>
    </div>
  )
}