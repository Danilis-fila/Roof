import React, {useState} from "react";
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

  return (
      <div className="gallery">
        <div className="gallery__wrapper">

          <a className="gallery__item" gallery-scroll="true"  onClick={() => {setShowModal(true); setArray(item1)}}>
            <div className="gallery__item-wrapper">
              <img className="gallery__item-img" src="/image/photoPVH/pvh20.jpg"></img>
            </div>
            <div className="gallery__item-title">Lorem, ipsum.</div>
          </a>

          <a className="gallery__item" gallery-scroll="true" onClick={() => {setShowModal(true); setArray(item2)}}>
            <div className="gallery__item-wrapper">
              <img className="gallery__item-img" src="/image/photoPVH/pvh23.jpg"></img>
            </div>
            <div className="gallery__item-title">Lorem, ipsum dolor.</div>
          </a>

          <a className="gallery__item" gallery-scroll="true" onClick={() => {setShowModal(true); setArray(item3)}}>
            <div className="gallery__item-wrapper">
              <img className="gallery__item-img" src="/image/photoPVH/pvh24.jpg"></img>
            </div>
            <div className="gallery__item-title">Lorem, ipsum.</div>
          </a>

          <a className="gallery__item" gallery-scroll="true" onClick={() => {setShowModal(true); setArray(item4)}}>
            <div className="gallery__item-wrapper">
              <img className="gallery__item-img" src="/image/photoPVH/pvh8.jpg"></img>
            </div>
            <div className="gallery__item-title">Lorem, ipsum dolor.</div>
          </a>

          <a className="gallery__item" gallery-scroll="true" onClick={() => {setShowModal(true); setArray(item5)}}>
            <div className="gallery__item-wrapper">
              <img className="gallery__item-img" src="/image/photoPVH/pvh27.jpg"></img>
            </div>
            <div className="gallery__item-title">Lorem ipsum dolor sit.</div>
          </a>

          <PopupGallery active={showModal} onClose={closePopup} gallery={array}>

          </PopupGallery>

        </div>
      </div>  
    )
  }
  