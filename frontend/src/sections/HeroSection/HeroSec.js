import React, { useEffect, useRef } from 'react';
import gsap from "gsap/dist/gsap";
import SplitText from 'split-type';
import './hero.css';

export default function HeroSec() {
  const textRef = useRef(null);
  const horizontalLineRef = useRef(null);
  const verticalLineRef = useRef(null);
  const circleLineRef = useRef(null);

  useEffect(() => {
    const text = new SplitText('.hero-row', { type: 'chars', charsClass: 'char' });
    const chars = text.chars;

    const t1 = gsap.timeline({ defaults: { ease: 'power4.out' } });
    t1.set(chars, { y: 800 });
    t1.to(chars, {
      y: 0,
      duration: 2.3,
      stagger: 0.05,
    });

    // Animation for the scale effect of the line
    gsap.fromTo(
      horizontalLineRef.current,
      { scale: 0, opacity:0, transformOrigin: '0 0' },
      { scale: 1, opacity:0.2, duration: 2, ease: 'power4.out',delay:1, duration:3.2 }
    );
    gsap.fromTo(
      verticalLineRef.current,
      { scale: 0, opacity:0, transformOrigin: '0 0' },
      { scale: 1, opacity:0.2, duration: 2, ease: 'power4.out',delay:1, duration:2.6 }
    );
    gsap.fromTo(
      circleLineRef.current,
      { scale: 0, opacity:0, transformOrigin: '0 0' },
      { scale: 1, opacity:0.2, duration: 2, ease: 'power4.out',delay:1, duration:3 }
    );
  }, []);

  return (
    <section className="hero-section">
      <div className="horizontal-line" ref={horizontalLineRef}></div>
      <div className="vertical-line" ref={verticalLineRef}></div>
      <div className="circle" ref={circleLineRef}></div>
      <div className="hero-text-wrapper">
        <div className="row">
          <div className="hero-row hero-name" ref={textRef}>
            <p>jagdish aneshwar</p>
          </div>
        </div>
        <div className="row">
          <div className="hero-row hero-field" ref={textRef}>
            <p>Fullstack Developer</p>
          </div>
        </div>
      </div>
    </section>
  );
}
