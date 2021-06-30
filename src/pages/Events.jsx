import React, { useContext, useEffect } from 'react';

// Components
import Event from '../components/Event/Event';

// Animation
import Aos from 'aos';
import 'aos/dist/aos.css';

// Context
import { EventsContext } from '../context/EventsContext'

const Events = () => {

    const events = useContext(EventsContext)[0];

    useEffect(() => {
        Aos.init({
            duration: 800
        });
    }, [])

    return (
        <section className='events'>
            <h1 data-aos="fade-down">&lt;Events/&gt;</h1>
            {/* {error &&
                <div className="error">
                    <h1>Some Error occured 😭</h1>
                </div>
            }
            {isPending &&
                <div className="pending">
                    <h1>Loading.... </h1>
                </div>
            } */}
            {events && !events.length &&
                <div className="no-event">
                    <h1 data-aos="fade-right" data-aos-delay="600" className='pending'>No Events right now 😥</h1>
                </div>
            }
            {events &&
                <div className="events-list" data-aos="fade-up" data-aos-delay="600">
                    {events.map(event => (
                        <Event event={event} key={event.id} />
                    ))}
                </div>
            }
        </section>
    )
}

export default Events
