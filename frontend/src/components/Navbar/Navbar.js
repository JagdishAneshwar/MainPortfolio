import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import PropTypes from 'prop-types';
import './navbar.css';

export default function Navbar(props) {
  const navName = useRef(null);
  const menuName = useRef(null);

  useEffect(()=>{
    gsap.to(navName.current, {
      y: 0,
      delay: 1,
      duration: 1,
    });


 //   gsap.to(menuName.current, {
 //    y: 0,
 //    delay: 2,
 //    duration: 1
 //  });
  })

  return (
    <>
    <nav className="navbar navbar-expand-md fixed-top menu-wrapper">
        <Link to="/Home" className="navbar-brand navbar-name "  data-aos="fade-right" ref={navName}><span className="firstname">{props.firstname}</span><span
            className="surname">
            {props.lastname}</span></Link>
          {/* <ul className="nav me-auto justify-content-end mt-2 mt-lg-0" data-aos="fade-right">
        <li className="nav-item"><a className="btn btn-link menu nav-link" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions" ref={menuName}>Menu</a></li>
        </ul> /*}
      </nav>
  {/*  <div class="offcanvas offcanvas-end add" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">Menu</h5>
      <button type="button" class="btn-close text-reset btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body bg-dark">
      <nav>
        <a href="#" class="nav__link">
          <span class="nav__link--text" data-splitting>Home</span>
          <span class="nav__link--text" data-splitting>Home</span>
        </a>
        <a href="#" class="nav__link">
          <span class="nav__link--text" data-splitting>About</span>
          <span class="nav__link--text" data-splitting>About</span>
        </a>
        <a href="#" class="nav__link">
          <span class="nav__link--text" data-splitting>Contact</span>
          <span class="nav__link--text" data-splitting>Contact</span>
        </a>
      </nav>
    </div>
  </div> */}
  </>
  )
}

Navbar.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired
}

Navbar.defaultProps = {
  firstname:"Jagdish",
  lastname:"Aneshwar"
}

