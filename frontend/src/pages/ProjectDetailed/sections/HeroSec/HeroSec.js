import React from 'react'
import './herose.css'

export default function HeroSec({img}) {
  console.log(img)
  return (
    <div className='pd-hero-sec'>
    <div className="pd-hero-img-wrapper">
        <div className="pd-img" style={{backgroundImage:  `url('${img}')`}}></div>
    </div>

    </div>
  )
}
