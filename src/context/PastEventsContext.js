import { createContext , useState } from 'react';
import pastEventsData from '../data/pastEvents';

export const PastEventsContext = createContext();

export const PastEventsProvider = (props) => {

    const [pastEvents , setPastEvents] = useState(pastEventsData);

    return(
        <PastEventsContext.Provider value={[pastEvents , setPastEvents]}>
            {props.children}
        </PastEventsContext.Provider>
    )
}