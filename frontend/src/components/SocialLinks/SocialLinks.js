import React from 'react'
import './sociallinks.css'

export default function SocialLinks() {
  return (
    <>
    <div className="social-widget">
    <a className="btn btn-primary bg-dark border-0 footer-title title-social-links" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions1" aria-controls="offcanvasWithBothOptions">Social Links</a>

</div>

<div className="offcanvas social-wrapper offcanvas-start bg-dark"data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions1" aria-labelledby="offcanvasWithBothOptionsLabel">
    <div className="icon-wrapper">
    <div class="icons8-github"></div>
    </div>
    <div className="icon-wrapper">
    <div class="icons8-whatsapp"></div>
    </div>
    <div className="icon-wrapper">
    <div class="icons8-linkedin"></div>
    </div>
    <div className="icon-wrapper">
    <div class="icons8-facebook"></div>
    </div>
    <div className="icon-wrapper">
    <div class="icons8-instagram"></div>
    </div>
    <div className="icon-wrapper">
    <div class="icons8-medium"></div>
    </div>
</div></>
  )
}
