// SocialIcon.js
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SocialIcon({ link, imgSrc, triggerRef }) {
  const iconRef = useRef(null);

  useEffect(() => {
    gsap.to(iconRef.current, {
      y: 0,
      opacity: 1,
      delay: 1.5,
      duration: 1,
      scrollTrigger: {
        trigger: triggerRef.current,
        start: 'top 115%',
        end: 'top 20%',
        toggleActions: 'play none none reverse',
      },
    });
  }, [triggerRef]);

  return (
    <div className="icon-wrapper">
      <a className="icon" href={link} target="_blank" rel="noreferrer" ref={iconRef}>
        <img src={imgSrc} alt="Social Icon" />
      </a>
    </div>
  );
}
