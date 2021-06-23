import React , { useState , useEffect } from 'react';

import '../../scss/layout/eventDetails.scss';

const EventDetails = ({ match }) => {

    const [event, setEvent] = useState({});

    const id = match.params.id;

    const fetchEvent = async () => {
        const res = await fetch(`http://localhost:5000/api/events/get?id=${id}`);
        const data = await res.json();
        setEvent(data);
    }

    useEffect(() => {
        fetchEvent();
    } , [])

    return (
        <div className='event-details'>
            <img src={event.img} alt={event.title} />
            <div>
                <h1>{event.title}</h1>
                <p>{event.body}</p>
                <a href={event.formLink}>
                    <button>
                        Register Now
                    </button>
                </a>
            </div>
        </div>
    )
}

export default EventDetails;
