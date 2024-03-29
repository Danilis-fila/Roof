import React, { useEffect, useMemo } from "react";

export default function AboutUs() {
  //const[runningNumber, setRunningNumber] = useState(true);

  function outNum(value, time, step, elem) {
    let l = document.querySelector(elem)
    let n = 0;
    let t = Math.round(time / (value / step));
    let interval = setInterval(() => {
      n = n + step;
      if (n === value) {
        clearInterval(interval);
      }
      l.textContent = `${n}`;
    }, t);
  } 
  

  let runningNumber = true;
  const runningNumbers = () => {
    const animateElements = document.querySelector(".aboutUs");
    const rect = animateElements?.getBoundingClientRect();
    if (rect === undefined) return;
    const win = window.innerHeight - rect.top;
    if ((win - 150) > 0 && runningNumber) { //450
      runningNumber = false;
      outNum(300, 3500, 1, '.aboutUs__number-project');
      outNum(75000, 3000, 100, '.aboutUs__number-performed');
      outNum(10, 5000, 1, '.aboutUs__number-years');
    }
  }

  
  useEffect(() => {
    window.addEventListener("scroll", runningNumbers);
    runningNumbers();
    return () => window.removeEventListener("scroll", runningNumbers);
  })

 
  return (
    <div className="aboutUs" data-scroll>
      <h2 className="aboutUs__title">О НАС В ЦИФРАХ</h2>
      <div className="aboutUs__wrapper">
        <div className="aboutUs__cell">
          <h2 className="aboutUs__text">ВЫПОЛНЕННЫХ ПРОЕКТОВ:</h2>

          <div className="aboutUs__number">
            <p className="aboutUs__more aboutUs__more-project aboutUs__number"></p>
            <p className="aboutUs__number aboutUs__number-project">300</p>
          </div>
        </div> 

        <div className="aboutUs__cell">
          <h2 className="aboutUs__text">СДЕЛАННОЙ КРОВЛИ:</h2>

          <div className="aboutUs__number">
            <p className="aboutUs__more aboutUs__more-performed aboutUs__number"></p>
            <p className="aboutUs__number aboutUs__number-performed">75000</p>
          </div>
        </div> 

        <div className="aboutUs__cell">
          <h2 className="aboutUs__text">ЛЕТ НА РЫНКЕ:</h2>

          <div className="aboutUs__number">
            <p className="aboutUs__more aboutUs__more-years aboutUs__number"></p>
            <p className="aboutUs__number aboutUs__number-years">10</p>
          </div>
        </div> 
      </div>

    </div>
  )
}