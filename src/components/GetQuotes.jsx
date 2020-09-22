import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';

const ICON_TWITTER = <FontAwesomeIcon icon={faTwitterSquare} className=" hover:bg-gray-700" />;
const ICON_QUOTE_LEFT = <FontAwesomeIcon icon={faQuoteLeft} />;
const ICON_QUOTE_RIGHT = <FontAwesomeIcon icon={faQuoteRight} />;


export default function GetQuotes() {
    const [quotes, setQuotes] = useState([]);
    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');
    const QUOTES_LENGTH = quotes.length;


    useEffect(() => {
        async function getQuotes() {
            let response = await fetch('https://type.fit/api/quotes');
            let data = await response.json();
            const INDEX = Math.ceil(Math.random() * 1000);
            setQuotes(data);
            setQuote(data[INDEX].text);
            setAuthor(data[INDEX].author === null ? 'Anonimous' : data[INDEX].author);
        }

        getQuotes();
    }, [])

    function handleOnClick() {
        const INDEX = Math.ceil(Math.random() * QUOTES_LENGTH);
        setQuote(quotes[INDEX].text);
        setAuthor(quotes[INDEX].author === null ? 'Anonimous' : quotes[INDEX].author);
    }

    return (
        <div className="App h-screen bg-blue-400 flex items-center justify-center" id="quote-box">
            <div className="w-full md:w-8/12 lg:w-6/12 min-h-96 rounded overflow-hidden bg-gray-100 shadow-lg">
                <h1 className="text-2xl md:text-5xl text-center font-bold mb-3" id="text">{ICON_QUOTE_LEFT}{quote}{ICON_QUOTE_RIGHT}</h1>
                <p className="text-right pr-5 justify-center text-xl md:text-3xl" id="author">{author}</p>
                <div className="flex items-center justify-between px-5">
                    <a href="http://twitter.com/intent/tweet" target="_blank" rel="noopener noreferrer" id="tweet-quote" className="text-5xl text-gray-500">{ICON_TWITTER}</a>
                    <button className="bg-gray-300 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" onClick={handleOnClick} id="new-quote">New quote</button>
                </div>
            </div>
        </div>
    )
}
