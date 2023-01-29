import React, {useCallback, useEffect, useState} from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const route = useRouter();

  const homePageMove = useCallback(() => {
    let header = document.querySelector(".header");

    if (window.pageYOffset > 30 ) {
        header?.classList?.add('header--is-scroll')
    } else { 
        header?.classList?.remove('header--is-scroll')
    }
  }, []);

  useEffect(() => {
      window.addEventListener("scroll", homePageMove);
      homePageMove();
      return () => window.removeEventListener("scroll", homePageMove);
  })

  return (
    <div className="header">
      <div className="header__top-line">
        <div className="header__top-panel">

          <div className="header__working-hours">
            <div className="header__shedule">пн–сб: 8:00–18:00</div>
            <div>вс: выходной</div>
          </div>

          <div className="header__contacts">
            <div className="header__email">asdsa@gmail.com</div>
            <div className="header__phone">+79780000000</div>
          </div>
        </div>
      </div>

      <div className="header__bottom-line">
        <div className="header__bottom-panel">
          <div className="header__logo"></div>
          <div className="header__menu">
            <ul className="header__menu-items">
              <li>
                <Link href="/" legacyBehavior><a className={`header__menu-item ${route.pathname === '/' ? 'header--active' : ''}`}>ГЛАВНАЯ</a></Link>
              </li>
              <li>
                <Link href="/about_the_company" legacyBehavior><a className={`header__menu-item ${route.pathname === '/about_the_company' ? 'header--active' : ''}`}>О КОМПАНИИ</a></Link>
              </li>
              <li>
                <Link href="/services" legacyBehavior><a className={`header__menu-item ${route.pathname === '/services' ? 'header--active' : ''}`}>УСЛУГИ</a></Link>
              </li>
              <li>
                <Link href="/contacts" legacyBehavior><a className={`header__menu-item ${route.pathname === '/contacts' ? 'header--active' : ''}`}>КОНТАКТЫ</a></Link>
              </li>
            </ul>
          </div>
          <a className="header__link-phone" href="tel:+79780000000">ПОЗВОНИТЬ СЕЙЧАС</a>
        </div>
      </div>
    </div>
  )
}