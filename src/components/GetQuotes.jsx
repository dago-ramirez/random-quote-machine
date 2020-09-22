import React, { useState, useEffect } from 'react';

export default function GetQuotes() {
    const [quotes, setQuotes] = useState([]);
    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');
    const QUOTES_LENGTH = quotes.length;


    useEffect(() => {
        async function getQuotes() {
            let response = await fetch('https://type.fit/api/quotes');
            let data = await response.json();
            setQuotes(data);
        }

        getQuotes();
    }, [])

    function handleOnClick() {
        const INDEX = Math.ceil(Math.random() * QUOTES_LENGTH);
        setQuote(quotes[INDEX].text);
        setAuthor(quotes[INDEX].author === null ? 'Anonimous' : quotes[INDEX].author);
    }

    return (
        <div className="App h-screen bg-blue-400 flex items-center justify-center">
            <div className="w-full md:w-8/12 lg:w-6/12 h-80 rounded overflow-hidden bg-gray-100 shadow-lg">
                <h1 className="h-56 bg-gray-300 m-0">{quote}</h1>
                <p className="h-12 bg-green-300 m-0 p-0 text-right pr-4 justify-center">{author}</p>
                <div className="h-12 bg-yellow-300 m-0 flex items-center">
                    <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" onClick={handleOnClick}>New quote</button>
                </div>
            </div>
        </div>
    )
}
