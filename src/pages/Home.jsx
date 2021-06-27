import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

// Animation
import Parallax from 'react-rellax';
import Aos from 'aos';
import 'aos/dist/aos.css';

// Hooks
import useFetch from '../hooks/useFetch';

function Home() {

    // TODO LIGHT THEME MAYBE

    const { data: events, isPending, error } = useFetch('http://localhost:5000/api/events');

    useEffect(() => {
        Aos.init({ 
            duration: 2000
        });
    } , []);

    return (
        <div className='home'>
            <main>
                <div className="art">
                    <Parallax speed={-10}>
                        <div className="rect"></div>
                        <div className="rect"></div>
                    </Parallax>
                    <Parallax speed={ 3 }>
                    <div className="circle circle-1"></div>
                    <div className="circle circle-2"></div>
                    </Parallax>
                    <div className='bubble'></div>
                </div>
                <div className='content'>
                    <Parallax speed={7}>
                        <h1>
                            The Byte Knights
                        </h1>
                    </Parallax>
                    <Parallax speed={5}>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit cum nam quasi quos officiis odio placeat earum laudantium voluptates illum?
                        </p>
                    </Parallax>
                    <Parallax speed={3}>
                        <button>
                            <Link to="/about">
                                Read More
                            </Link>
                        </button>
                    </Parallax>
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
                {events && events.length ?  (
                    <div className='loaded'>
                        <h1 data-aos="fade-up">&lt;Our lastest Event/&gt;</h1>
                        <img data-aos="fade-right" data-aos-delay="600" src={events[0].img} alt="" />
                        <h3 data-aos="fade-left" data-aos-delay="200">{events[0].title}</h3>
                        <p data-aos="fade-right" data-aos-delay="900">{events[0].body}</p>
                    </div>
                ): (
                    <div className='no-event'>
                        <h1>No Event Right now 😥</h1>
                    </div>
                )
                }
            </section>
        </div>
    )
}

export default Home;
