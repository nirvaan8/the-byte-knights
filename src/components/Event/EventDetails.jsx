import React, { useEffect } from 'react';

// Animation
import Aos from 'aos';
import 'aos/dist/aos.css';

// Data
import events from '../../data/events';

const EventDetails = ({ match }) => {

    const id = match.params.id;

    const event = events[id - 1]

    useEffect(() => {
        Aos.init({
            duration: 700
        });
    }, [])

    return (
        <div className='event-details'>
            {event &&
                <>
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
                </>
            }
        </div>
    )
}

export default EventDetails;
