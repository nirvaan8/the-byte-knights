import React, { useState, useEffect } from 'react';

// Animation
import Aos from 'aos';
import 'aos/dist/aos.css';

const EventDetails = ({ match }) => {

    const [event, setEvent] = useState({});

    const id = match.params.id;

    // TODO use usefetch hook
    const fetchEvent = async () => {
        const res = await fetch(`http://localhost:5000/api/events/get?id=${id}`);
        const data = await res.json();
        setEvent(data);
    }

    useEffect(() => {
        fetchEvent();
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
