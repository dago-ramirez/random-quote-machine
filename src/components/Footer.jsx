import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons';

const ICON_TWITTER = <FontAwesomeIcon icon={faTwitterSquare} />;

export default function Footer({textColor, bgColor, handleOnClick}) {
    return (
        <div className="flex items-center justify-between px-5">
            <a style={textColor} href="http://twitter.com/intent/tweet" target="_blank" rel="noopener noreferrer" id="tweet-quote" className="text-5xl text-color">{ICON_TWITTER}</a>
            <button style={bgColor} className="text-white hover:bg-gray-500 font-bold py-2 px-4 rounded" onClick={handleOnClick} id="new-quote">New quote</button>
        </div>
    )
}
