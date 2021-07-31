import React, { useEffect } from 'react';

// Animation
import Aos from 'aos';

// Data
import AboutObj from '../data/about';

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
                    <h1 data-aos="fade-right">&lt;{AboutObj.headline}/&gt;</h1>
                    <p data-aos="fade-right" data-aos-delay="600">
                        {AboutObj.para1}
                    </p>
                    <br />
                    <p data-aos="fade-right" data-aos-delay="600">
                        {AboutObj.para2Heading}
                        <br />
                        {AboutObj.para2}
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
