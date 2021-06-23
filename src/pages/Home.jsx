import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'

import { TweenMax } from "gsap";

import useFetch from '../hooks/useFetch';

function Home() {

    const { data: events, isPending, error } = useFetch('http://localhost:5000/api/events');

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


        document.documentElement.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.documentElement.removeEventListener('mousemove', handleMouseMove);
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
                    <h1 className="animate-stagger">
                        The Byte Knights
                    </h1>
                    <p className="animate-stagger">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit cum nam quasi quos officiis odio placeat earum laudantium voluptates illum?
                    </p>
                    <button className="animate-stagger">
                        <Link to="/about">
                            Read More
                        </Link>
                    </button>
                </div>
            </main>
            <section className="lastest-event">
                {error &&
                    <div className="error">
                        <h1>Some Error occured 😭</h1>
                    </div>
                }
                {isPending &&
                    <div className="pending">
                        <h1>Loading.... </h1>
                    </div>
                }
                {events &&
                    <div className='loaded'>
                        <h1>&lt;Our lastest Event/&gt;</h1>
                        <img src={events[0].img} alt="" />
                        <h3>{events[0].title}</h3>
                        <p>{events[0].body}</p>
                    </div>
                }
            </section>
        </div>
    )
}

export default Home;
