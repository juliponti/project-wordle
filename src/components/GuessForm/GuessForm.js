import React, { useState } from "react";

function GuessForm({ handleSubmitGuess }) {
  const [guess, setGuess] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    handleSubmitGuess(guess);
    setGuess("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="input">Enter the guess:</label>
      <input
        autoFocus
        id="input"
        type="text"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        minLength={1}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        required
      />
    </form>
  );
}

export default GuessForm;
