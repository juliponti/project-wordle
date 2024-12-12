import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "/src/constants";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";
const GUESS_LENGTH = 5;
function GuessGridResults({ guessList, answer }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => {
        const value = guessList[num]?.label;
        const result = checkGuess(value, answer);
        return (
          <p className="guess">
            {range(GUESS_LENGTH).map((num) => (
              <span className={`cell ${result?.[num]?.status}`}>
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
