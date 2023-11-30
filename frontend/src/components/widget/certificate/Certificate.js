import React, { useEffect, useRef } from 'react';
import gsap from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { motion } from 'framer-motion';
import './certificate.css';

gsap.registerPlugin(ScrollTrigger);

export default function Certificate({ index, imgSrc, title, issuedBy, issuedDate, link }) {
  const [img, setimg] = React.useState({ x: 0, y: 0 });
  const certificateRef = useRef(null);

  useEffect(() => {
    const mousemove = (e) => {
      setimg({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', mousemove);

    gsap.fromTo(
      certificateRef.current,
      { x: -2000, transformOrigin: '0 0' },
      { x: 0, duration: 1.8, ease: 'power4.out', delay: 1,
        scrollTrigger: {
          trigger: certificateRef.current,
          start: 'top 80%',
          end: 'top 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );


    

    return () => {
      window.removeEventListener('mousemove', mousemove);
    };
  }, []);

  const handleCertificationHover = (certId) => {
    const certificationImage = document.getElementById(`cert-image-${certId}`);

    if (certificationImage) {
      certificationImage.style.opacity = '1';
      certificationImage.style.transform = 'scale(1)';
    }
  };

  const handleCertificationLeave = (certId) => {
    const certificationImage = document.getElementById(`cert-image-${certId}`);
    if (certificationImage) {
      certificationImage.style.opacity = '0';
      certificationImage.style.transform = 'scale(0.8)';
    }
  };

  return (
    <a href={link} className='link-wrapper' target="_blank" ref={certificateRef}>
      <div className="certification" id="ct2" >
        <motion.div
          animate={{ x: img.x, y: img.y }}
          transition={{ type: 'tween', duration: 0.2 }}
          className="certification-image-reveal"
          onMouseEnter={() => handleCertificationHover(index)}
          onMouseLeave={() => handleCertificationLeave(index)}
        >
          <img className="hidden-img" src={imgSrc} alt="Certification Image" />
        </motion.div>

        <div className="certification-title">
          <p>{title.split('\n').map((line, i) => <span key={i}>{line}<br /></span>)}</p>
        </div>
        <div className="certification-issued-date">
          <p>{issuedDate}</p>
        </div>
        <div className="certification-issued-by">
          <p>{issuedBy}</p>
        </div>
      </div> 
      <div className="project-horizontal-line" ref={certificateRef}></div>
    </a>
  );
}
