import { createContext, useState } from "react";
import eventsData from '../data/events';

export const EventsContext = createContext();

export const EventsProvider = (props) => {

    const [events, setEvents] = useState(eventsData)

    return (
        <EventsContext.Provider value={[events, setEvents]}>
            {props.children}
        </EventsContext.Provider>
    )
}