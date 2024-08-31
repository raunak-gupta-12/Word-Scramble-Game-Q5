import React from "react";

const Controls = ({ handleGuess, newGame, attempts }) => {
  return (
    <div className="controls">
      <button onClick={handleGuess}>Submit Guess</button>
      <button onClick={newGame}>New Word</button>
      <p>Attempts: {attempts}</p>
    </div>
  );
};

export default Controls;
