import fb from '../assets/fb.svg';
import insta from '../assets/insta.svg';
import yt from '../assets/yt.svg';
import github from '../assets/github.svg';

import emailSvg from '../assets/email.svg'
import locationSvg from '../assets/location.svg'

const footerObj = {
    about: {
        headline: 'About us',
        para: `The byte knight club which is known for their wonderful and attractive event which attracts students to participate in different cocerculum activities which provides fun, creation,of new ideas and thought.`,
        links: [
            {
                id: 1,
                img: fb,
                text: 'facebook',
                link: 'https://www.facebook.com/profile.php?id=100069116769192'
            },
            {
                id: 2,
                img: insta,
                text: 'instagram',
                link: 'https://www.instagram.com/thebyteknights/'
            },
            {
                id: 3,
                img: yt,
                text: 'youtube',
                link: 'https://www.youtube.com/channel/UCqDxCutv0nzcx0uZrFM76lA'
            },
            {
                id: 4,
                img: github,
                text: 'github',
                link: 'https://github.com/TheByteKnights2021/'
            },
        ]
    },
    quickLinks: {
        headline: 'Quick Links'
    },
    contactInfo: {
        headline: 'Contact Info',
        infos: [
            {
                id: 1,
                svg: locationSvg,
                alt: 'location',
                text:  `Shaheed Captain Anuj Nayyar Marg,
                Block B, BB Block, Janakpuri,
                New Delhi, Delhi 110058`,
                link: 'https://www.google.com/maps/place/Mira+Model+School/@28.6312261,77.0916841,17z/data=!3m1!4b1!4m5!3m4!1s0x390d04bc15555555:0xc67001beb4b7d7fa!8m2!3d28.6312214!4d77.0938728'
            },
            {
                id: 2,
                svg: emailSvg,
                alt: 'email',
                text:  `byteknights.mms@gmail.com`,
                link: 'mailto:byteknights.mms@gmail.com'
            }
        ]
    }
}

export default footerObj