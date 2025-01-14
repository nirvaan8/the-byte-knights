import React from 'react'

const PastEvents = ({ event }) => {
    return (
        <div className="event" key={event.id}>
            <img src={event.img} alt={event.title} />
            <h1>{event.title}</h1>
            <p>{event.body}</p>
        </div>
    )
}

export default PastEvents
