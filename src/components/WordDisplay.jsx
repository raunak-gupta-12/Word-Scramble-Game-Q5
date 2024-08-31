import React from "react";

const WordDisplay = ({ scrambledWord }) => {
  return (
    <div className="word-display">
      <p className="n1">Scrambled Word: <p className="n2">{scrambledWord}</p></p>
    </div>
  );
};

export default WordDisplay;
