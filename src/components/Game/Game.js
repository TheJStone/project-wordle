import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessDisplay from '../GuessDisplay';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import EndGameBanner from '../EndGameBanner';

function Game() {
  const [guessList, setGuessList] = React.useState([])
  const [winGame, setWinGameResult] = React.useState(undefined)
  const [answer, setAnswer] = React.useState(() => sample(WORDS))
  console.log(answer)
  function resetGame() {
    setGuessList([]) 
    setWinGameResult(undefined)
    setAnswer(sample(WORDS))
  }

  function parseGuess(guess) {
    if (guessList >= NUM_OF_GUESSES_ALLOWED) {
      return;
    }
    const charList = guess.split('').map((char, index) => {
      const insideWord = answer.includes(char)
      const correctPosition = answer[index] == char
      var guessType = insideWord ? 'misplaced' : 'incorrect'
      guessType = correctPosition ? 'correct' : guessType
      return {
        index,
        char,
        guessType
      } 
    })
    const newGuessList = [...guessList, charList]
    setGuessList(newGuessList)
    var winGame = undefined
    if (guess == answer) {
      winGame = true
    }
    else if (newGuessList.length == NUM_OF_GUESSES_ALLOWED) {
      winGame = false
    }
    setWinGameResult(winGame)
  }
  return (
    <>
      <GuessDisplay guessList={guessList}></GuessDisplay>
      <GuessInput submitGuess={parseGuess}></GuessInput>
      {winGame != undefined && 
        <EndGameBanner 
          win={winGame} 
          numGuesses={guessList.length} 
          correctWord={answer}
          resetGameFunc={resetGame}
          >
        </EndGameBanner>}
    </>)
}

export default Game;
