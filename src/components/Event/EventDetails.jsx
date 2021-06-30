import React, { useEffect, useContext } from 'react';

// Animation
import Aos from 'aos';
import 'aos/dist/aos.css';

// Context
import { EventsContext } from '../../context/EventsContext';

const EventDetails = ({ match }) => {

    const id = match.params.id;

    const event  = useContext(EventsContext)[0][id - 1]

    useEffect(() => {
        Aos.init({
            duration: 700
        });
    }, [])

    return (
        <div className='event-details'>
            <div className="imgBox">
                <img src={event.img} alt={event.title} data-aos="fade-right" data-aos-delay="600" />
            </div>
            <div>
                <h1 data-aos="fade-up" data-aos-delay="600">{event.title}</h1>
                <p data-aos="fade-up" data-aos-delay="700" >{event.body}</p>
                <a data-aos="fade-up" data-aos-delay="800" href={event.formLink}>
                    <button>
                        Register Now
                    </button>
                </a>
            </div>
        </div>
    )
}

export default EventDetails;
