import React from 'react'
import gsap from 'gsap'
import { cocktailLists, mockTailLists } from '../../constants'
import { SplitText, ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react'

const Cocktails = () => {
    gsap.registerPlugin(ScrollTrigger); 
    
    useGSAP(() => {
        console.log('GSAP animation triggered');
        const parallaxTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#cocktails',
                start: 'top 30%',
                end: 'bottom 80%',
                scrub: true,
            }
        })
        parallaxTimeline.from('#c-left-leaf', {
            x: -100, y: 100
        })
        .from('#c-right-leaf', {
            x: 100, y: 100
        });

        // Добавьте это:
        ScrollTrigger.refresh();
    });

  return (

    <section id="cocktails" className='noisy' >
        <img src="/images/cocktail-left-leaf.png" alt="l-leaf" id='c-left-leaf' />
        <img src="/images/cocktail-right-leaf.png" alt="r-leaf" id='c-right-leaf' />

        <div className="list">
            <div className="popular">
                <h2>Most popular cocktails:</h2>
                <ul>
                    {cocktailLists.map((drink) => (
                        <li key={drink.name}>
                            <div className='md:me-28'>
                                <h3>{drink.name}</h3>
                                <p>{drink.country}</p>
                                <p>{drink.detail}</p>
                            </div>
                            <span>-{drink.price}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="loved">
                <h2>Most popular cocktails:</h2>
                <ul>
                    {mockTailLists.map(({name, country, detail, price}) => (
                        <li key={name}>
                            <div className='me-28'>
                                <h3>{name}</h3>
                                <p>{country}</p>
                                <p>{detail}</p>
                            </div>
                            <span>-{price}</span>
                        </li>
                    ))}
                </ul>
            </div>

            </div>    
    </section>
  )
}

export default Cocktails