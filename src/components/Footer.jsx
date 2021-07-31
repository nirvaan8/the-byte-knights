import React from 'react';
import { Link } from 'react-router-dom';

// Data
import footerObj from '../data/footer';

function Footer() {
    return (
        <footer className='footer'>
            <div className="container-footer">
                <div className="sec about-us">
                    <h2>{footerObj.about.headline}</h2>
                    <p>{footerObj.about.para}</p>
                    <ul className="sci">
                        {footerObj.about.links.map(link => (
                            <li key={link.id}>
                                <a href={link.link} target="_blank" rel="noreferrer">
                                    <img src={link.img} alt={link.text} />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="sec quick-links">
                    <h2>{footerObj.quickLinks.headline}</h2>
                    <ul>
                        <li><Link to="/about">About</Link></li>
                        <li><a href="https://www.facebook.com/profile.php?id=100069116769192">Facebook</a></li>
                        <li><a href="https://www.instagram.com/thebyteknights/">Instagram</a></li>
                        <li><a href="https://www.youtube.com/channel/UCqDxCutv0nzcx0uZrFM76lA">Youtube</a></li>
                        <li><a href="https://github.com/TheByteKnights2021/">Github</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>
                <div className="sec contact">
                    <h2>{footerObj.contactInfo.headline}</h2>
                    <ul className="info">
                        {footerObj.contactInfo.infos.map(info => (
                            <li key={info.id}>
                                <span>
                                    <img src={info.svg} alt={info.alt} />
                                </span>
                                <span>
                                    <a href={info.link}>{info.text}</a>
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer >
    )
}

export default Footer;
