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
    <a class="icons8-github" href="https://github.com/JagdishAneshwar"></a>
    </div>
    <div className="icon-wrapper">
    <div class="icons8-whatsapp" href="https://wa.link/91sbjb"></div>
    </div>
    <div className="icon-wrapper">
    <div class="icons8-linkedin" href="https://www.linkedin.com/in/jagdish-aneshwar/"></div>
    </div>
    <div className="icon-wrapper">
    <div class="icons8-facebook" href="https://www.facebook.com/JagdishAneshwar"></div>
    </div>
    <div className="icon-wrapper">
    <div class="icons8-instagram" href="https://www.instagram.com/jagdishaneshwar/"></div>
    </div>
    <div className="icon-wrapper">
    <div class="icons8-medium" href="https://medium.com/@jagdish_aneshwar"></div>
    </div>
</div></>
  )
}
