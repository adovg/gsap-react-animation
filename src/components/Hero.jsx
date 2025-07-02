import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText, ScrollTrigger } from 'gsap/all';
import React, { useRef } from 'react'
import { useMediaQuery } from 'react-responsive';

const Hero = () => {
  gsap.registerPlugin(ScrollTrigger); 
  const videoRef = useRef();
  const isMobile = useMediaQuery({maxWidth: 767});

  useGSAP(() => {
    const heroSplit = new SplitText('.title', {type: 'chars, words'});
    const paragraphSplit = new SplitText('.subtitle', {type: 'lines'});    
    heroSplit.chars.forEach((char) => char.classList.add('text-gradient'));

    gsap.from(heroSplit.chars, {
      yPercent: 100,
      duration: 1.8,
      ease: 'expo.out',
      stagger: 0.08
    });

    gsap.from(paragraphSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: 'expo.out',
      stagger: 0.06,
      delay: 1,
    })

    gsap.timeline({
      scrollTrigger: {
        trigger: '#hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    })
    .to(".right-leaf", { y: 200 }, 0)
    .to(".left-leaf", { y: -200 }, 0)

    // Animate video currentTime as user scrolls through hero (smooth version)
    if (videoRef.current) {
      const video = videoRef.current;
      const onLoadedMetadata = () => {
        const st = ScrollTrigger.create({
          trigger: '#hero',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
          onUpdate: (self) => {
            if (video.duration) {
              // self.progress от 0 до 1
              video.currentTime = self.progress * video.duration;
            }
          }
        });
      };
      if (video.readyState >= 1) {
        onLoadedMetadata();
      } else {
        video.addEventListener('loadedmetadata', onLoadedMetadata, { once: true });
      }
    }
  }, []);

  const startValue = isMobile ? 'top 50%' : 'center 60%';
  const endValue = isMobile ? "120% top" : "bottom top";
  return (
    <>
        <section id='hero' className='noisy'>
            <h1 className='title'>MOJITO</h1>
            <img src="/images/hero-left-leaf.png" alt="left-leaf" className='left-leaf' />
            <img src="/images/hero-right-leaf.png" alt="right-leaf" className='right-leaf' />

            <div className="body">
              <div className="content">
                <div className="space-y-5 hidden md:block">
                  <p>Cool. Crisp. Classic</p>
                  <p className="subtitle">Sip the Spirit <br /> of Summer</p>
                </div>
                <div className="view-cocktails">
                  <p className="subtitle">Every cocktail on our menu is a blend of premium ingredients, creative flair, and timeless recipes — designed to delight your senses. 
                  </p>
                  <a href="#cocktails" className="" id="cocktails">View cocktails</a>
                </div>
              </div>
            </div>
        </section>

        <div className="video absolute inset-0">
          <video ref={videoRef} src="/videos/input.mp4" muted playsInline preload='auto'></video>
        </div>
    </>
  )
}

export default Hero