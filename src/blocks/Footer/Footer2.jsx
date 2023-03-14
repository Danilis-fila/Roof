import Link from "next/link";
import React from "react";

export default function Footer2() {
    var date = new Date();
  return (
    <div className="footer2">
        <div className="footer2__wrapper">
            <div className="footer2__follow">
                <a href="https://viber.click/79787349962" target="_blank" className="footer2__img"></a>
            </div>
            <div className="footer2__follow">
                <a href="https://api.whatsapp.com/send?phone=79788099882" target="_blank" className="footer2__img"></a>
            </div>
            <div className="footer2__follow">
                <a href="https://t.me/+79788099882" target="_blank" className="footer2__img"></a>
            </div>
        </div>
        <div className="footer2__menu">
            <ul className="footer2__links">
                <li className="footer2__link"><Link href='/' legacyBehavior><a>ГЛАВНАЯ</a></Link></li>
                <li className="footer2__link"><Link href='/about_the_company' legacyBehavior><a>О КОМПАНИИ</a></Link></li>
                <li className="footer2__link"><Link href='/services' legacyBehavior><a>УСЛУГИ</a></Link></li>
                <li className="footer2__link"><Link href='/contacts' legacyBehavior><a>КОНТАКТЫ</a></Link></li>
            </ul>
        </div>
        <p>2003 © {date.getFullYear()} Монтаж гидроизоляции из ПВХ мембран в Крыму.</p>
    </div>
  )
} 