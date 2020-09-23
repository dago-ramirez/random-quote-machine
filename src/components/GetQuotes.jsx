import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons';

const ICON_TWITTER = <FontAwesomeIcon  icon={faTwitterSquare} />;

let colors = ['lightseagreen', 'crimson', 'lightsalmon', 'darkorange', 'mediumpurple', 'slate', 'mediumseagreen', 'olivedrab', 'cadetblue', 'dodgerblue', 'teal', 'darkorchid'];
let hoverColors = ['darkcyan', 'lightcoral', 'tomato', 'orangered', 'rebeccapurple', 'darkslateblue', 'seagreen', 'darkolivegreen', 'steelblue', 'cornflowerblue', 'mediumturquoise', 'purple'];
// let styles = {
//     bgColor: {
//         'backgroundColor': ''
//     },
//     textColor: {
//         'color': ''
//     }
// }
let bgColor = {
    'backgroundColor': '',
    'transitionDuration': 2
}

let hoverColor = {
    'hvColor': ''
}

let textColor = {
    'color': ''
}

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

        const index = Math.floor(Math.random() * 12);
        // styles.bgColor['backgroundColor'] = colors[index];
        // styles.textColor['color'] = colors[index];
        bgColor = {
            'backgroundColor': colors[index],
            'transitionDuration': 2
        }
        hoverColor = {
            'hvColor': hoverColors[index]
        }
        textColor = {
            'color': colors[index]
        }
    }, [])

    function colorGenerator() {
        const index = Math.floor(Math.random() * 12);
        // styles.bgColor['backgroundColor'] = colors[index];
        // styles.textColor['color'] = colors[index];
        bgColor = {
            'backgroundColor': colors[index],
            'transitionDuration': 2
        }
        hoverColor = {
            'hvColor': hoverColors[index]
        }
        textColor = {
            'color': colors[index]
        }
    }

    function handleOnClick() {
        const INDEX = Math.ceil(Math.random() * QUOTES_LENGTH);
        setQuote(quotes[INDEX].text);
        setAuthor(quotes[INDEX].author === null ? 'Anonimous' : quotes[INDEX].author);
        colorGenerator()
    }

    return (
        <div style={bgColor} className="App h-screen  flex items-center justify-center" id="quote-box">
            <div className="w-full md:w-8/12 lg:w-6/12 min-h-96 rounded overflow-hidden bg-gray-100 shadow-lg">
                <h1 style={textColor} className="text-2xl md:text-3xl text-center font-bold mb-3" id="text">"{quote}"</h1>
                <p style={textColor} className="text-right pr-5 justify-center text-xl md:text-3xl" id="author">{author}</p>
                <div className="flex items-center justify-between px-5">
                    <a style={textColor} href="http://twitter.com/intent/tweet" target="_blank" rel="noopener noreferrer" id="tweet-quote" className="text-5xl text-color">{ICON_TWITTER}</a>
                    <button style={bgColor} className="transition-all duration-700 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" onClick={handleOnClick} id="new-quote">New quote</button>
                </div>
            </div>
        </div>
    )
}