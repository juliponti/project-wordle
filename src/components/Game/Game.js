import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessForm from "../GuessForm/GuessForm";
import GuessGridResults from "../GuessGrid/GuessGrid";

function Game() {
  const [userGuessList, setUserGuessList] = useState([]);
  const [answer, setAnswer] = React.useState(() => sample(WORDS));

  // To make debugging easier, we'll log the solution in the console.
  console.info({ answer });

  function handleSubmitGuess(guess) {
    const newGuess = { label: guess, id: Math.random() };
    setUserGuessList([...userGuessList, newGuess]);
  }
  return (
    <>
      <GuessGridResults guessList={userGuessList} answer={answer} />
      <GuessForm handleSubmitGuess={handleSubmitGuess} />
    </>
  );
}

export default Game;
