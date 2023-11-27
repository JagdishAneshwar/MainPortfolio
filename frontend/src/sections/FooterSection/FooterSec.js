import React from 'react'
import './footer.css'

export default function FooterSec({color,bg}) {
  const style = {
    color:color,
    backgroundColor:bg
  }
  return (
    <div className='footer-section' style={style}>
    <div className="my-email-wrapper">
    <div className="my-email">
    <span className='footer-email'>aneshwarjagdish</span>@gmail.com
    </div>
    <div className="my-email">+91 <span className='footer-nummber'>8928393524</span>
    </div>
    <div className='my-email copyright'><span className='copyright-symbol'>&copy;</span> Jagdish Aneshwar 2023, All Rights Reserved.</div>
    </div>
    
    </div>
  )
}

