import { useState } from "react";

function Quotes() {
    const [quote, setQuote] = useState(null);

    function getQuote(){
        // make fetch request to api, return quote if successful

       
        // store returned quote in state variable
        fetch('https://type.fit/api/quotes')
            .then(res => res.json())
            .then( data => {
                const randomNumber = Math.floor(Math.random() * data.length);
                setQuote(data[randomNumber]);
            })
    }
    return (
        <div className="quotes">

            {
                quote !== null && 
                <p>
                    <b>{quote.text}</b>
                    <br />
                    <span>- {quote.author}</span>
                </p>
            }

            <button onClick={getQuote}>Get quote</button>
        </div>
    )
}
export default Quotes;