import React from 'react';

// Data
import loaderObj from '../data/loader';

function Loader() {
    return (
        <div className='loader'>
            <span className="text1">{loaderObj.text}</span>
        </div>
    )
}

export default Loader;
