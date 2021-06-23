import React from 'react';
import { Link } from "react-router-dom";

const Event = ({ event }) => {

    return (
        <div className="event" key={event.id}>
            <Link to={`/events/${event.id}`}>
                <img src={event.img} alt={event.title} />
                <h1>{event.title}</h1>
                <p>{event.body.slice(0,250) + '... '}</p>
            </Link>
        </div>
    )
}

export default Event;
