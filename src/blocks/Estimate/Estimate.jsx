import React from "react";

export default function Estimate() {

  return (
    <div className="estimate" data-scroll>
        <div className="estimate__description">ГИДРОИЗОЛЯЦИЯ ПЛОСКИХ КРОВЕЛЬ, ТЕРРАС ФУНДАМЕНТОВ, БАССЕЙНОВ</div>
        <div className="estimate__title">ВЫПОЛНЯЕМ МОНТАЖ ПВХ МЕМБРАНЫ В КРЫМУ</div>
        
        <div className="estimate__icons">

          <div className="estimate__icon" estimate-scroll="true">
            <div className="estimate__wrapper">
              <div className="estimate__inner">
                <div className="estimate__icon-img" style={{backgroundImage: 'url(/image/photoEstimate/phone1.png)'}}></div>
              </div>
            </div>
            <div className="estimate__icon-title">ЗВОНОК</div>
            <div className="estimate__icon-description">Позвоните или напишите сообщение в Viber, WhatsApp.</div>
          </div>

          <div className="estimate__icon" estimate-scroll="true">
            <div className="estimate__wrapper">
              <div className="estimate__inner">
                <div className="estimate__icon-img" style={{backgroundImage: 'url(/image/photoEstimate/truk2.png)'}}></div>
              </div>
            </div>
            <div className="estimate__icon-title">ПРИЕДЕМ</div>
            <div className="estimate__icon-description">Выезд по Крыму бесплатный.</div>
          </div>

          <div className="estimate__icon" estimate-scroll="true">
            <div className="estimate__wrapper">
              <div className="estimate__inner">
                <div className="estimate__icon-img" style={{backgroundImage: 'url(/image/photoEstimate/pencil1.png)'}}></div>
              </div>
            </div>
            <div className="estimate__icon-title">ПОСЧИТАЕМ</div>
            <div className="estimate__icon-description">Замеряем и посчитаем стоимость гидроизоляции.</div>
          </div>
          
          <div className="estimate__icon" estimate-scroll="true">
            <div className="estimate__wrapper">
              <div className="estimate__inner">
                <div className="estimate__icon-img" style={{backgroundImage: 'url(/image/photoEstimate/ruble1.png)'}}></div>
              </div>
            </div>
            <div className="estimate__icon-title">СМЕТА</div>
            <div className="estimate__icon-description">Получаете стоимость работ с материалами.</div>
          </div>
        </div>
     </div> 
  )
}