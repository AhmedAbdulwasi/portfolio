import React from 'react';
import ArrowUp from '../assets/arrow.png';

function BackUp() {
    return (
        <div className="flex items-start fixed bottom-5 right-5">
            <a href="#navbar-page">
                <img src={ArrowUp} className="w-14 h-14" alt="Back to top" />
            </a>
        </div>
    );
}

export default BackUp;
