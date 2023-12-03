  import React, { useRef, useEffect } from 'react';
  import SplitType from 'split-type';
  import './about.css';
import Pdf from './Jagdish_Aneshwar.pdf';
  import gsap from "gsap";
  import {ScrollTrigger} from "gsap/ScrollTrigger";
  gsap.registerPlugin(ScrollTrigger)


  export default function AboutSec() {
    const aboutDescRef = useRef(null);
    const aboutTitleRef = useRef(null);
    const imageRef = useRef(null);
    const shareIconRefs = useRef([
      useRef(null),
      useRef(null),
      useRef(null),
      useRef(null),
      useRef(null),
      useRef(null),
    ]);

    useEffect(() => {
      const descText = new SplitType(aboutDescRef.current, { types: 'words' });
      gsap.from(descText.words, {
        y: 800,
        opacity: 1,
        duration: 5,
        stagger: 0.02,
        scrollTrigger: {
          trigger: aboutTitleRef.current,
          start: 'top 80%',
          end: 'top 20%',
          toggleActions: 'play none none reverse',
        },
      });

      const titleText = new SplitType(aboutTitleRef.current, { types: 'chars' });
      gsap.from(titleText.chars, {
        y: 800,
        opacity: 0,
        duration: 2,
        stagger: 0.08,
        scrollTrigger: {
          trigger: aboutTitleRef.current,
          start: 'top 80%',
          end: 'top 20%',
          toggleActions: 'play none none reverse',
        },
      });

      gsap.to(imageRef.current, {
        x: 0,
        delay: 1,
        opacity:1,
        duration: 1.5,
        scrollTrigger: {
          trigger: aboutTitleRef.current,
          start: 'top 80%',
          end: 'top 20%',
          toggleActions: 'play none none reverse',
        },
      });

      shareIconRefs.current.forEach((ref) => {
        
        gsap.to(ref.current, {
          y: 0,
          opacity: 1,
          delay: 2,
          duration: 1,
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 115%',
            end: 'top 20%',
            toggleActions: 'play none none reverse',
          },
        });
      });
      ScrollTrigger.refresh();
    }, []);

    return (
      <section className='about'>
        <div className='about-wrapper'>
          <div className='about-left'>
            <div className='profile-photo' ref={imageRef}></div>
          </div>
          <div className='about-right'>
          <div className="about-details-wrapper">
            <p className='about-title' ref={aboutTitleRef}>
              About.
            </p>
            <tt>
              <p className='about-description' ref={aboutDescRef}>
                Hello, my name is Jagdish Aneshwar & I'm a Computer Science graduate from Thakur College Of Science and Commerce. I've knowleged in Fullstack Development & Data Science. Which primarily includes, but not limited to my skills in Python, Django, MoongoDB, JS, and AWS. Currently working as frontend web developer, Looking for opportunity to work with the company where i can add value and take challenges in building innovative digital solutions.
              </p>
            </tt>
            <div className="social-share">
              <div className="icon-wrapper">
                <a className="icon header-icons-github" href="https://github.com/JagdishAneshwar" target="_blank" rel="noreferrer" ref={shareIconRefs.current[0]}></a>
              </div>
              <div className="icon-wrapper">
                <a className="icon header-icons-whatsapp" href="https://wa.link/91sbjb" target="_blank" rel="noreferrer" ref={shareIconRefs.current[1]}></a>
              </div>
              <div className="icon-wrapper">
                <a className="icon header-icons-medium" href="https://medium.com/@jagdish_aneshwar" target="_blank" rel="noreferrer" ref={shareIconRefs.current[2]}></a>
              </div>
              <div className="icon-wrapper">
                <a className="icon header-icons-linkedin" href="https://www.linkedin.com/in/jagdish-aneshwar/" target="_blank" rel="noreferrer" ref={shareIconRefs.current[3]}></a>
              </div>
              <div className="icon-wrapper">
                 <a className="icon header-icons-resume" href={Pdf} target="_blank" rel="noreferrer" ref={shareIconRefs.current[4]}>Resume</a>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>
    );
  }
