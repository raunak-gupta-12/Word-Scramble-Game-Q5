import React, { useState, useEffect } from "react";
import WordDisplay from "./components/WordDisplay";
import InputField from "./components/InputField";
import Feedback from "./components/Feedback";
import Controls from "./components/Controls";
import "./App.css";

const words = [
  { word: "addition", hint: "The process of adding numbers" },
  { word: "meeting", hint: "Event in which people come together" },
  // ...other words
];

const scrambleWord = (word) => {
  let scrambled = word.split("");
  for (let i = scrambled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [scrambled[i], scrambled[j]] = [scrambled[j], scrambled[i]];
  }
  return scrambled.join("");
};

const Game = () => {
  const [currentWord, setCurrentWord] = useState("");
  const [scrambledWord, setScrambledWord] = useState("");
  const [userGuess, setUserGuess] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [feedback, setFeedback] = useState("");
  
  useEffect(() => {
    newGame();
  }, []);

  const newGame = () => {
    const randomWordObj = words[Math.floor(Math.random() * words.length)];
    setCurrentWord(randomWordObj.word);
    setScrambledWord(scrambleWord(randomWordObj.word));
    setUserGuess("");
    setAttempts(0);
    setFeedback("");
  };

  const handleGuess = () => {
    setAttempts(attempts + 1);
    if (userGuess.toLowerCase() === currentWord.toLowerCase()) {
      setFeedback(`Correct! The word is ${currentWord.toUpperCase()}.`);
    } else {
      setFeedback("Incorrect guess. Try again!");
    }
  };

  return (
    <div className="game-container">
      <h2>Word Scramble Game</h2>
      <WordDisplay scrambledWord={scrambledWord} />
      <InputField userGuess={userGuess} setUserGuess={setUserGuess} />
      <Feedback feedback={feedback} />
      <Controls 
        handleGuess={handleGuess} 
        newGame={newGame} 
        attempts={attempts} 
      />
    </div>
  );
};

export default Game;
