import React from 'react';
import { Link } from 'react-router-dom';

// Svgs
import notFound from '../assets/not-found.svg';

function NotFound() {
    return (
        <div className="not-found">
            <h1>Not found</h1>
            <img src={notFound} alt="not-found" />
            <button>
                <Link to="/">
                    Go back to homepage
                </Link>
            </button>
        </div>
    )
}

export default NotFound;
