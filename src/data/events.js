/*

! Example

{
    id: 1,
    title: 'Made to Mingle',
    img: 'https://scontent.fdel46-1.fna.fbcdn.net/v/t1.6435-9/189593160_103928328587726_4233691751786710817_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=J-l7lAkwUOwAX94LeY7&_nc_ht=scontent.fdel46-1.fna&oh=42b1c37d7504e7a01d5e35dee8d92f62&oe=60D76113',
    body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam fuga et similique, doloribus aperiam, possimus autem minus optio perferendis quaerat provident? Aliquid dolor, repudiandae numquam doloremque a praesentium aliquam quas sapiente nam assumenda recusandae quibusdam nisi officia possimus nihil delectus quos fugiat, laudantium consequatur cumque sed architecto et? Labore, consectetur similique corrupti, soluta aliquid accusantium dolor ea et laborum debitis veritatis ad. Eligendi, veritatis consequuntur! Id rerum quos at veritatis eaque assumenda consequatur libero odio deleniti minima saepe nemo ad, dignissimos doloribus voluptatibus sed laudantium quas minus dolore ullam eius non? Qui nemo tempore eaque ratione aspernatur excepturi, aliquam, unde cupiditate ipsa rerum nesciunt eligendi harum alias quia fuga reiciendis consequuntur error odit eius.',
    formLink: "https://forms.gle/963Qt8gYgsrZPQbE9"
} */

import Img1 from '../assets/events/1.jpg';
import Img2 from '../assets/events/2.jpg';
import Img3 from '../assets/events/3.jpg';
import Img4 from '../assets/events/4.jpg';
import Img5 from '../assets/events/5.jpg';

const EventsObj = {
    headline: 'Events',
    activeEventsHeading: 'Active Events',
    pastEventsHeading: 'Past Events',
    activeEvents: [],
    pastEvents: [
        {
            id: 1,
            title: 'Social Debate',
            img: Img1,
            body: `Description of the competition:-
        and had an opinion to ban these apps. There were two teams:Team A and
        Team A had 3 participants and it was a
        SOCIAL MEDIA team where they talked
        about Instagram, Twitter and Facebook
        ban and oppose the decision taken by
        the government to ban these apps\n
        Team B had 2 participants and it was a
        government team who opposed team A .`
        },
        {
            id: 2,
            title: `Let's Code`,
            img: Img2,
            body: `In this event, students have to
        make a website using HTML.
        2. Topics were given on the spot
        to the participants and 4 days
        were given to them to submit
        their work.Topics of the competition were
        HERITAGE OF INDIA,
        RESTAURANTS,
        SPORTS,
        ONLINE EDUCATION,
        All the participants have to make the
        frontend of the website on either of one
        topic.`
        },
        {
            id: 3,
            title: `Made To Mingle`,
            img: Img3,
            body: `In this event, students have to
        make a power point presentation
        (ppt).
        2. Topics were given on the spot to the
        participants and time was given to
        them from 10 a.m. to 11:30 a.m
        3. Topics of the competition were:-
        ● On the occasion of International
        Yoga Day, which was on 21st June,
        2021 we gave the topic as
        "The
        benefits of Yoga
        "
        ● On the occasion of Environment
        day which was on 5th June, 2021 we
        gave the topic as
        "Environment"
        All the participants have to make a ppt on
        either of one topic.`
        },
        {
            id: 4,
            title: `Space Monk`,
            img: Img4,
            body: `This event was a gaming competition in
        which the participants had to play
        "Among us
        "
        ,the popular game.
        ● There were a total of 3 rounds for the
        selection and the one who win in all the
        rounds will win the game.
        ● Some basic game criteria:- IMPOSTER-2
        PLAYERS-15
        MAP-SKELD
        SERVER-ASIA`
        },
        {
            id: 5,
            title: `Magic  Painting`,
            img: Img5,
            body: `In this event, the participants made
        a drawing using Ms Paint on their
        computer systems.
        - The topic was given to them as
        "Solar system
        ".
        - Topic was given on the spot to the
        participants and time was given to
        them from 10 a.m. to 10:45 a.m.`
        },
    ]
}

export default EventsObj;