import React, { useState, useEffect } from 'react';
import Footer from './Footer';

let colors = ['lightseagreen', 'crimson', 'lightsalmon', 'darkorange', 'mediumpurple', 'slate', 'mediumseagreen', 'olivedrab', 'cadetblue', 'dodgerblue', 'teal', 'darkorchid'];
// let hoverColors = ['darkcyan', 'lightcoral', 'tomato', 'orangered', 'rebeccapurple', 'darkslateblue', 'seagreen', 'darkolivegreen', 'steelblue', 'cornflowerblue', 'mediumturquoise', 'purple'];

export default function GetQuotes() {
    const [quotes, setQuotes] = useState([]);
    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');
    const [bgColor, setBgColor] = useState({})
    const [textColor, setTextColor] = useState({})
    const QUOTES_LENGTH = quotes.length;

    useEffect(() => {
        async function getQuotes() {
            let response = await fetch('https://type.fit/api/quotes');
            let data = await response.json();
            const INDEX = Math.ceil(Math.random() * 1000);
            setQuotes(data);
            // Se configura la cita que se va a mostrar en la primera renderización
            setQuote(data[INDEX].text);
            setAuthor(data[INDEX].author === null ? 'Anonimous' : data[INDEX].author);
        }
        getQuotes();
        colorChanger();
    }, [])

    function colorChanger() {
        const index = Math.floor(Math.random() * 12);
        setBgColor({backgroundColor: colors[index]});
        setTextColor({color: colors[index]});
    }

    function handleOnClick() {
        const INDEX = Math.ceil(Math.random() * QUOTES_LENGTH);
        setQuote(quotes[INDEX].text);
        setAuthor(quotes[INDEX].author === null ? 'Anonimous' : quotes[INDEX].author);
        colorChanger();
    }

    return (
        <div style={bgColor} className="App h-screen  flex items-center justify-center" id="quote-box">
            <div className="w-full md:w-8/12 lg:w-6/12 min-h-96 rounded overflow-hidden bg-gray-100 shadow-lg">
                <h1 style={textColor} className="text-2xl md:text-3xl text-center font-bold mb-3" id="text">"{quote}"</h1>
                <p style={textColor} className="text-right pr-5 justify-center text-xl md:text-3xl" id="author">{author}</p>
                <Footer textColor={textColor} bgColor={bgColor} handleOnClick={handleOnClick} />
            </div>
        </div>
    )
}