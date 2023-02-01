import React, {useEffect, useCallback, useState} from "react";
import Image from "next/image";
import PopupGallery from "../PopupGallery/PopupGallery";


const item1 = [
  '/image/photoPVH/pvh19.jpg',
  '/image/photoPVH/pvh20.jpg',
  '/image/photoPVH/pvh21.jpg',
];

const item2 = [
  '/image/photoPVH/pvh22.jpg',
  '/image/photoPVH/pvh23.jpg'
];

const item3 = [
  '/image/photoPVH/pvh24.jpg',
  '/image/photoPVH/pvh25.jpg',
  '/image/photoPVH/pvh29.jpg',
  '/image/photoPVH/pvh30.jpg'
];

const item4 = [
  '/image/photoPVH/pvh8.jpg',
  '/image/photoPVH/pvh12.jpg',
  '/image/photoPVH/pvh9.jpg',
  '/image/photoPVH/pvh10.jpg'
];

const item5 = [
  '/image/photoPVH/pvh26.jpg',
  '/image/photoPVH/pvh27.jpg',
  '/image/photoPVH/pvh28.jpg',
  '/image/photoPVH/pvh29.jpg',
  '/image/photoPVH/pvh30.jpg'
];

export default function Gallery() {
  const [showModal, setShowModal] = useState(false);
  const [array, setArray] = useState([]);
  const closePopup = () => {
    setShowModal(false);
  }

  const galleryScroll = useCallback(() => {
    const animateElements = document.querySelectorAll('[gallery-scroll]');
    animateElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        // if(rect === null) animateElements = document.querySelectorAll('[estimate-scroll]');
        const win = window.innerHeight - rect.top;
        if (win > -70) {
            element.classList.add('is-ready-gallery')
        } else {
            element.classList.remove('is-ready-gallery')
        }
    })
  }, [])
  
  useEffect(() => {
    window.addEventListener("scroll", galleryScroll);
    galleryScroll();
    return () => window.removeEventListener("scroll", galleryScroll);
  })
  
  useEffect(() => {
    const animateElements = document.querySelectorAll("[gallery-scroll]");
      animateElements.forEach((element) => {
          element.classList.add('gallery-animate-view')
      })
  }, [galleryScroll])

  return (
      <div className="gallery">
        <div className="gallery__wrapper">

          <a className="gallery__item" gallery-scroll="true"  onClick={() => {setShowModal(true); setArray(item1)}}>
            <div className="gallery__item-wrapper">
              <Image className="gallery__item-img" src="/image/photoPVH/pvh20.jpg" alt="Фото мембраны" width={500} height={500}/>
            </div>
            <div className="gallery__item-title">8. описание</div>
          </a>

          <a className="gallery__item" gallery-scroll="true" onClick={() => {setShowModal(true); setArray(item2)}}>
            <div className="gallery__item-wrapper">
              <Image className="gallery__item-img" src="/image/photoPVH/pvh23.jpg" alt="Фото мембраны" width={500} height={500}/>
            </div>
            <div className="gallery__item-title">9. описание</div>
          </a>

          <a className="gallery__item" gallery-scroll="true" onClick={() => {setShowModal(true); setArray(item3)}}>
            <div className="gallery__item-wrapper">
            <Image className="gallery__item-img" src="/image/photoPVH/pvh24.jpg" alt="Фото мембраны" width={500} height={500}/>
            </div>
            <div className="gallery__item-title">10. описание</div>
          </a>

          <a className="gallery__item" gallery-scroll="true" onClick={() => {setShowModal(true); setArray(item4)}}>
            <div className="gallery__item-wrapper">
              <Image className="gallery__item-img" src="/image/photoPVH/pvh8.jpg" alt="Фото мембраны" width={500} height={500}/>
            </div>
            <div className="gallery__item-title">11. описание</div>
          </a>

          <a className="gallery__item" gallery-scroll="true" onClick={() => {setShowModal(true); setArray(item5)}}>
            <div className="gallery__item-wrapper">
              <Image className="gallery__item-img" src="/image/photoPVH/pvh27.jpg" alt="Фото мембраны" width={500} height={500}/>
            </div>
            <div className="gallery__item-title">12. описание</div>
          </a>

          <PopupGallery active={showModal} onClose={closePopup} gallery={array}/>
        </div>
      </div>  
    )
  }
  