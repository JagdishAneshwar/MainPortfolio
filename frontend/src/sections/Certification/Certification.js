import React,{useRef, useEffect} from 'react';
import Certificate from '../../components/widget/certificate/Certificate'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import './certification.css';
console.log('Before registering ScrollTrigger:', gsap);
gsap.registerPlugin(ScrollTrigger);
console.log('After registering ScrollTrigger:', gsap);


export default function Certification() {
  const certificateRef=useRef(null)
  const certificateHeaderRef=useRef(null)
  
  useEffect(()=>{
    const certificateTitle = new SplitType(certificateRef.current, { types: 'chars' });

    gsap.from(certificateTitle.chars, {
      y: 800,
      opacity: 0,
      duration: 2,
      stagger: 0.08,
      scrollTrigger: {
        trigger: certificateRef.current,
        start: 'top 80%',
        end: 'top 20%',
        toggleActions: 'play none none reverse',
      },
    });


    const certificateHeader = new SplitType(certificateHeaderRef.current, { types: 'words' });

    gsap.from(certificateHeader.words, {
      y: 800,
      opacity: 0,
      duration: 2,
      stagger: 0.08,
      scrollTrigger: {
        trigger: certificateHeaderRef.current,
        start: 'top 80%',
        end: 'top 20%',
        toggleActions: 'play none none reverse',
      },
    });


  },[])
      const certificationData = [
        {
          imageSrc: 'https://ik.imagekit.io/Jagdish/data%20Analysis%20by%20IBM_page-0001.jpg?updatedAt=1699033825351',
          title: 'Data Analysis with Python',
          issuedDate: '17-01-2022',
          issuedBy: 'IBM from Coursera',
          openText: 'https://www.coursera.org/account/accomplishments/certificate/QAFDZYFGDQZA',
        },
        {
          imageSrc: 'https://ik.imagekit.io/Jagdish/AWS_Academy_Graduate___AWS_Academy_Introduction_to_Cloud_Semester_1_Badge20230224-28-1yeaf7i%20(1)_page-0001.jpg?updatedAt=1698949744492',
          title: 'AWS Academy Graduate\n Intro to Cloud Semester 1',
          issuedDate: '11-12-2022',
          issuedBy: 'Amazon Web Service Academy',
          openText: 'https://www.credly.com/badges/521c689a-d4ab-4674-8e8c-8301ab8a9b70/linked_in_profile',
        },
        {
          imageSrc: 'https://ik.imagekit.io/Jagdish/ml%20foundation%20course_page-0001.jpg?updatedAt=1699033542049',
          title: 'Machine Learning Foundation',
          issuedDate: '09-04-2022',
          issuedBy: 'Thakur College Of Science & Commerce',
          openText: 'https://drive.google.com/file/d/1fbKmgJmRwTRDFSFgMRijVrES7V15fvmt/view?usp=sharing',
        },
        {
            imageSrc: 'https://ik.imagekit.io/Jagdish/AWS_Academy_Graduate___AWS_Academy_Introduction_to_Cloud_Semester_2_Badge20230224-28-1omr5qy_page-0001.jpg?updatedAt=1699027176552',
            title: 'AWS Academy Graduate\n Intro to Cloud Semester 2',
            issuedDate: '28-12-2022',
            issuedBy: 'Amazon Web Service Academy',
            openText: 'https://www.credly.com/badges/9fa5de2f-20ef-45d0-baef-f036f2d07472/linked_in_profile',
          },
          {
            imageSrc: 'https://ik.imagekit.io/Jagdish/DBA_page-0001.jpg?updatedAt=1698949750378',
            title: 'Database Administrator',
            issuedDate: '09-06-2021',
            issuedBy: 'Thakur College Of Science & Commerce',
            openText: 'https://drive.google.com/file/d/10L1J_Ds6UPvlFyISUkjTmXTrVf4kDMk5/view?usp=sharing',
          },
          {
            imageSrc: 'https://ik.imagekit.io/Jagdish/ML_page-0001.jpg?updatedAt=1698949744514',
            title: 'Machine Learning Course for Beginner',
            issuedDate: '13-11-2022',
            issuedBy: 'Analytics Vidhya',
            openText: 'https://drive.google.com/file/d/10L1J_Ds6UPvlFyISUkjTmXTrVf4kDMk5/view?usp=sharing',
          },
      ];
    

  return (
    <section className='certification-section'><div className="certification-title-wrapper"><h2 ref={certificateRef}>Certification</h2></div>
            <div className="certification-wrapper">
                <div className="certifications">
                    <div className="certification" id="header" ref={certificateHeaderRef}>
                        <div className="header-certification-title">
                            <p>Title</p>
                        </div>
                        <div className="header-certification-issued-date">
                            <p>Issued Date</p>
                        </div>
                        <div className="header-certification-issued-by">
                            <p>Issued By</p>
                        </div>
                    </div>
                    {
                        certificationData.map((certificate, index)=>{
                            return(
                                <Certificate index={`certificate-`+index} imgSrc={certificate.imageSrc} title={certificate.title} issuedBy={certificate.issuedBy} issuedDate={certificate.issuedDate} link={certificate.openText}  />
                            )
                        })
                    }
                </div>
            </div>
    </section>
  )
}
