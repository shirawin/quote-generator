import React from 'react';

const QuoteButton = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      Give me another one
    </button>
  );
};

export default QuoteButton;