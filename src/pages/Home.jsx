import React, { useState, useEffect } from 'react';

import { TweenMax } from "gsap";

function Home() {
    const handleMouseMove = (e) => {
        const pos = document.documentElement;
        pos.style.setProperty('--x', e.clientX + 'px')
        pos.style.setProperty('--y', e.clientY + 'px')
    }

    useEffect(() => {

        // loading animation
        TweenMax.from(
            '.animate-stagger',
            {
                opacity: 0,
                y: -50,
                duration: 1,
                ease: 'Power2.easeInOut',
                stagger: 0.6
            }
        )

        TweenMax.from(
            '.rect',
            {
                opacity: 1,
                duration: 1.8,
                delay: 1,
                y: -650,
                ease: 'Power2.easeOut'
            }
        )

        TweenMax.from(
            '.circle',
            {
                opacity: 1,
                duration: 1,
                x: -650,
                delay: 1,
                ease: 'Power2.easeIn'
            }
        )


        document.documentElement.addEventListener('mousemove' , handleMouseMove);

        return () => {
            document.documentElement.removeEventListener('mousemove' , handleMouseMove);
        }
    }, []);

    return (
        <div className='home'>
            <main>
                <div className="art">
                    <div className="rect"></div>
                    <div className="rect"></div>
                    <div className="circle circle-1"></div>
                    <div className="circle circle-2"></div>
                    <div className='bubble'></div>
                </div>
                <div className='content'>
                    <h1 className="animate-stagger">The Byte Knights</h1>
                    <p className="animate-stagger">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit cum nam quasi quos officiis odio placeat earum laudantium voluptates illum?
                    </p>
                    <button className="animate-stagger">Get started</button>
                </div>
            </main>
            <section></section>
        </div>
    )
}

export default Home;
