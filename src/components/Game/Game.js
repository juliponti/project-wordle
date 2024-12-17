import React, { useState } from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessForm from "../GuessForm";
import GuessGridResults from "../GuessGrid";
import Keyboard from "../Keyboard";
function Game() {
  const [userGuessList, setUserGuessList] = useState([]);
  const [answer, setAnswer] = React.useState(() => sample(WORDS));
  const [bannerInfo, setBannerInfo] = useState({
    display: false,
    message: null,
    className: "",
  });

  function handleWinning() {
    setBannerInfo({
      display: true,
      message: (
        <p>
          <strong>Congratulations!</strong> Got it in{" "}
          <strong>{`${userGuessList.length + 1} guesses`}</strong>
        </p>
      ),
      className: "happy",
    });
  }

  function handleLosing() {
    setBannerInfo({
      display: true,
      message: (
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>
        </p>
      ),
      className: "sad",
    });
  }

  function handleResetGame() {
    setUserGuessList([]);
    setAnswer(sample(WORDS));
    setBannerInfo({ display: false, message: null, className: "" });
  }

  function handleSubmitGuess(guess) {
    const newGuess = { label: guess, id: Math.random() };
    setUserGuessList([...userGuessList, newGuess]);

    if (guess === answer) handleWinning();

    if (userGuessList.length === NUM_OF_GUESSES_ALLOWED - 1) handleLosing();
  }
  return (
    <>
      <GuessGridResults guessList={userGuessList} answer={answer} />
      <GuessForm
        handleSubmitGuess={handleSubmitGuess}
        isBannerShowing={bannerInfo.display}
      />
      {bannerInfo.display && (
        <form onSubmit={handleResetGame}>
          <div className={`${bannerInfo.className} banner`}>
            {bannerInfo.message}

            <button className="button" type="submit">
              Restart Game
            </button>
          </div>
        </form>
      )}
      <Keyboard guessList={userGuessList} answer={answer} />
    </>
  );
}

export default Game;
