import React from 'react';

function EndGameBanner({win, numGuesses, correctWord, resetGameFunc}) {
  return (
    <div className={`${win ? 'happy' : 'sad'} banner`}>
        {win ?
        <p>
          <strong>Congratulations!</strong> You got it in
          <strong>{' '}{numGuesses}{' '}{numGuesses == 1 ? 'guess!' : 'guesses!'}</strong>
        </p>
        :
        <p>
          Sorry the correct answer is <strong>{correctWord}</strong>
        </p>
        }
        <button onClick={resetGameFunc} className="button">Play Again?</button>
    </div>
  );
}

export default EndGameBanner;
