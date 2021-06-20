import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'

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
                <h1>Our lastest Event</h1>
                <img src="https://dummyimage.com/720x600" alt=""/>
                <h3>Events Name</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, quisquam vero adipisci exercitationem, repellat repudiandae inventore quod magnam tenetur sint rerum. Perferendis consequuntur aspernatur nihil? Voluptates dolore mollitia libero, deleniti deserunt harum. Quis fuga quibusdam molestias voluptate earum totam quisquam minus vel sequi similique eius facere unde repellat iusto, temporibus recusandae ipsam reprehenderit cum quae vero! Voluptas mollitia aut illum!</p>
            </section>
        </div>
    )
}

export default Home;
