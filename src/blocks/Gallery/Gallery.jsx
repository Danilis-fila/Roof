import React, {useEffect, useCallback, useState} from "react";
import Image from "next/image";
import PopupGallery from "../PopupGallery/PopupGallery";
import galleryData from "./GalleryData";


export default function Gallery() {
  const [showModal, setShowModal] = useState(false);
  const [array, setArray] = useState([]);

  const closePopup = () => {
    setShowModal(false);
    document.querySelector(".body").classList.remove("body--lock");
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
          {
            galleryData.map(data => {
              return (
                <a className="gallery__item" gallery-scroll="true" key={data.id}  onClick={() => {document.querySelector(".body").classList.add("body--lock");
                  setShowModal(true); setArray(data.image_array)}}>

                  <div className="gallery__item-wrapper">
                    <Image className="gallery__item-img" src={data.image} blurDataURL={data.image}  quality={80}  alt="Фото мембраны" placeholder="blur" width={500} height={500}/>
                  </div>
                  <div className="gallery__item-title">{data.title}</div>
                </a>
              )
            })
          }
          <PopupGallery active={showModal} onClose={closePopup} gallery={array}/>
        </div>
      </div>  
    )
  }
  