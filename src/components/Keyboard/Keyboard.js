import React, { useMemo, useCallback } from "react";
import { KEWBOARD_LETTERS } from "../../constants";
import { checkGuess } from "../../game-helpers";

function Keyboard({ guessList, answer }) {
  const checkedGuesses = useMemo(
    () => guessList.map((guess) => checkGuess(guess.label, answer)),
    [answer, guessList]
  );

  const getLetterStatus = useCallback(
    (letter) => {
      const letterStatuses = {};

      checkedGuesses.forEach((guess) => {
        guess.forEach(({ status, letter }) => {
          if (status === "correct") {
            letterStatuses[letter] = status;
          }

          if (status === "misplaced" && letterStatuses[letter] !== "correct") {
            letterStatuses[letter] = status;
          }

          if (status === "incorrect" && !letterStatuses[letter]) {
            letterStatuses[letter] = status;
          }
        });
      });

      return letterStatuses[letter];
    },
    [checkedGuesses]
  );

  return (
    <div className="keyboard-container">
      <KeyboardRow
        row={KEWBOARD_LETTERS.firstRow}
        getLetterStatus={getLetterStatus}
      />
      <KeyboardRow
        row={KEWBOARD_LETTERS.secondRow}
        getLetterStatus={getLetterStatus}
      />
      <KeyboardRow
        row={KEWBOARD_LETTERS.thirdRow}
        getLetterStatus={getLetterStatus}
      />
    </div>
  );
}

export default Keyboard;

function KeyboardRow({ row, getLetterStatus }) {
  return (
    <div className="keyboard-layout">
      {row.map((letter, index) => (
        <div key={index} className={`keyboard-key ${getLetterStatus(letter)}`}>
          {letter}
        </div>
      ))}
    </div>
  );
}
