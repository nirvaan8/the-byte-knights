import React, { useEffect } from 'react';

// Components
import Event from '../components/Event/Event';
import PastEvent from '../components/Event/PastEvent';

// Animation
import Aos from 'aos';
import 'aos/dist/aos.css';

// Data
import EventsObj from '../data/events';

const Events = () => {

    useEffect(() => {
        Aos.init({
            duration: 800,
            delay: 4
        });
    }, [])

    const { activeEvents , pastEvents } = EventsObj;

    return (
        <section className='events'>
            <h1 data-aos="fade-down">&lt;{EventsObj.headline}/&gt;</h1>
            <div className='active-events events-section'>
                <h2>{EventsObj.activeEventsHeading}</h2>
                {activeEvents && !activeEvents.length &&
                    <div className="no-event">
                        <h1 data-aos="fade-right" data-aos-delay="600" className='no-events'>No Events right now 😥</h1>
                    </div>
                }
                {activeEvents &&
                    <div className="events-list" data-aos="fade-up" data-aos-delay="600">
                        {activeEvents.map(event => (
                            <Event event={event} key={event.id} />
                        ))}
                    </div>
                }
            </div>

            <div className='past-events events-section'>
                <h2>{EventsObj.pastEventsHeading}</h2>
                {pastEvents &&
                    <div className="events-list" data-aos="fade-up" data-aos-delay="600">
                        {pastEvents.map(event => (
                            <PastEvent event={event} key={event.id} />
                        ))}
                    </div>
                }
            </div>

        </section>
    )
}

export default Events
