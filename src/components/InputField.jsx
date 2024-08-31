import React from "react";

const InputField = ({ userGuess, setUserGuess }) => {
  return (
    <div className="input-field">
      <input
        type="text"
        value={userGuess}
        onChange={(e) => setUserGuess(e.target.value)}
        placeholder="Enter your guess"
      />
    </div>
  );
};

export default InputField;
