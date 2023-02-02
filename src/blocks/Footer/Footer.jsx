import React from "react";

export default function Footer() {
  return (
    <div className="footer">
        <div className="footer__wrapper">
            <div className="footer__top">
                <div className="footer__phone">
                    <p>Тел.: +7(978)809-98-82</p>
                    <p>E-mail: crimearoof@gmail.com</p>
                </div>
                <div className="footer__address">
                    <p>Крым г.Симферополь,</p>
                    <p>ул. Софьи Перовской, 75</p>
                </div>
                <div className="footer__time">
                    <p>пн–сб: 8:00–18:00</p>
                    <p>вс: выходной</p>
                </div>
            </div>

            <div className="footer__bottom">
                <div className="footer__links">
                    <a href="#" className="footer__wp"></a>
                    <a href="#" className="footer__vr"></a>
                    <a href="#" className="footer__vk"></a>    
                </div>  
            </div>        
        </div>
    </div>
  )
} 