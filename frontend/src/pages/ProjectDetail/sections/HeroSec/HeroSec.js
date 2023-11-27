import React from 'react'
import './herose.css'

export default function HeroSec({desktopImg,caption, mobileImg, id}) {
  console.log(caption,desktopImg,mobileImg)
  return (
    <div className='pd-hero-sec' key={id}>
    <div className="pd-hero-img-wrapper">
    
    <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
        {desktopImg && mobileImg && desktopImg.length === mobileImg.length && desktopImg.map((image, index) => (
  <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
    <picture>
      <source
        srcSet={`${mobileImg[index]}`}
        media="(max-width: 480px)"
      />
      <img
        src={`${image}`}
        className="d-block w-100"
        alt="..."
      />
    </picture>
    <div className="carousel-caption d-none d-md-block">
      <h5 className='image-caption'>{caption[index]}</h5>
    </div>
  </div>
))}



        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
</div>
    </div>
    
  )
}
