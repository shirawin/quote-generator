import React, { useState, useEffect } from 'react';
import QuoteDisplay from '../QuoteDisplay/QuoteDisplay';
import QuoteButton from '../QuoteButton/QuoteButton';



const Bord = () => {


    const [quote, setQuote] = useState('');
  
    const apiUrl = 'https://cors-anywhere.herokuapp.com/https://api.forismatic.com/api/1.0/?&method=getQuote&format=json&lang=en';

    const fetchQuote = async () => {
      try {
        // const response = await fetch(apiUrl);
        const response= fetch(apiUrl, {
            method: 'POST', 
            mode: 'no-cors',
            headers: {
              'Content-Type': 'application/json'
            },
            body: {"key" : "some text"}
          });
        const data = await response.json();
        setQuote(data.quoteText);
      } catch (error) {
        console.error('Error fetching quote:', error);
      }
    };
  
    useEffect(() => {
      fetchQuote();
    }, []);
  
    return (
      <div>
        <QuoteDisplay quote={quote} />
        <QuoteButton onClick={fetchQuote} />
      </div>
    );
  };
  
  export default Bord;