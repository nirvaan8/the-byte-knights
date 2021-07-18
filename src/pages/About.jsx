import React, { useEffect } from 'react';

// Animation
import Aos from 'aos';

function About() {

    useEffect(() => {
        Aos.init({
            duration: 700,
        })
    }, [])

    return (
        <div className='about'>
            <section>
                <div className="content">
                    <h1 data-aos="fade-right">&lt;About Us/&gt;</h1>
                    <p data-aos="fade-right" data-aos-delay="600">
                        The club’s motto is “To Live To Learn”. Learning is not limited to school’s textbooks. It aims to provide a platform to the students to learn about all the spheres of life be it related to computers and technology or leadership and speaking skills. The vision is to contribute to the intellectual enrichment, enhance experiences, develop new skills and to promote excellence and interest in information technology in all the miraites to make them extra ordinary. We look forward to create a pool of intelligent tech wizards who can perform wonders using computers and influence others.
                    </p>
                    <br />
                    <p data-aos="fade-right" data-aos-delay="600">
                        The club’s objectives are:
                        <br />
                        To participate and succeed in intra and inter school events
                        Extend full support in all projects
                        Impart training to others
                        Share to learn
                        Raise the bars in IT skills.
                        Organise competitions on National and Global Levels.
                        Trips to offices of Multinational Companies like Google and Microsoft.
                        Regular workshops are also conducted by expertise resource person on various emerging IT skills like animation, digital photography, video editing, movie making, programming, web design and developing, network security and much more. The Club also has a youtube channel by its name where the members showcase their talents.
                    </p>
                </div>
                <div className="waves">
                    <div className='wave wave1'></div>
                    <div className='wave wave2'></div>
                </div>
            </section>
        </div>
    )
}

export default About;
