import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

// Animation
import Parallax from 'react-rellax';
import Aos from 'aos';
import 'aos/dist/aos.css';

// Context
import pastEvents from '../data/pastEvents';

function Home() {
    
    const events = pastEvents;

    useEffect(() => {
        Aos.init({
            duration: 1500
        });
    }, []);

    return (
        <div className='home'>
            <main>
                <div className="art">
                    <Parallax speed={-10}>
                        <div className="rect"></div>
                        <div className="rect"></div>
                    </Parallax>
                    <Parallax speed={3}>
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
                            The byte knight club which is known for their wonderful and attractive event which attracts students to participate in different cocerculum activities which provides fun, creation,of new ideas and thoughts.
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
                {events && events.length ? (
                    <div className='loaded'>
                        <h1 data-aos="fade-up">&lt;Our lastest Event/&gt;</h1>
                        <img data-aos="fade-right" data-aos-delay="600" src={events[events.length - 1].img} alt="" />
                        <h3 data-aos="fade-left" data-aos-delay="200">{events[events.length - 1].title}</h3>
                        <p data-aos="fade-right" data-aos-delay="900">{events[events.length - 1].body}</p>
                    </div>
                ) : (
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
