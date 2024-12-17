import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "/src/constants";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";
const GUESS_LENGTH = 5;
function GuessGridResults({ guessList, answer }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num, index) => {
        const value = guessList[num]?.label;
        const result = checkGuess(value, answer);
        return (
          <p className="guess" key={index}>
            {range(GUESS_LENGTH).map((num, i) => (
              <span className={`cell ${result?.[num]?.status}`} key={i}>
                {result?.[num]?.letter}
              </span>
            ))}
          </p>
        );
      })}
    </div>
  );
}

export default GuessGridResults;
