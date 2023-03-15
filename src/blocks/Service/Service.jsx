import React from "react";
import Image from "next/image";
import ServiceData from './ServiceData.json';

export default function Service() {
  return (
    <div className="service" data-scroll>
      <h2 className="service__title">УСЛУГИ, КОТОРЫЕ МЫ ПРЕДОСТАВЛЯЕМ</h2>
      <h2 className="service__title2">Выполняем все виды гидроизоляций из ПВХ или ТПО мембран.</h2>
      <div className="service__cards">
        {
          ServiceData.map(data => {
            return (
              <div className="service__card" key={data.id} data-scroll>
                <div className="service__card-wrapper">
                  <div className="service__card-img">
                    <Image  src={data.img} alt="Иконка услуги" width={500} height={500}/>
                  </div>
                  <div className="service__card-title">{data.title}</div>
                  <div className="service__card-desc">{data.description}</div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}