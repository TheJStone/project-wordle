import React from 'react';

function GuessInput({submitGuess}) {
  const [invalidReminder, setInvalidReminder] = React.useState(false)
  const [wordInput, setWordInput] = React.useState("")
  const inputValidation = new RegExp('^[a-zA-Z]{1,5}$')
  function submitWordInput() {
    if (!inputValidation.test(wordInput) || !valideWord(wordInput)) {
      setInvalidReminder(true)
      return;
    }
    const upperCaseWord = wordInput.toUpperCase();
    submitGuess(upperCaseWord);
    setWordInput("")
    setInvalidReminder(false)
  }

  async function valideWord(word) {
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    return response.status == 200
  }

  return (
    <form className="guess-input-wrapper" onSubmit={(event) => {
      event.preventDefault()
      submitWordInput()
    }}>
      <label htmlFor="guess-input">Enter Guess: 
      </label>
      {invalidReminder && (
        <div className="guess-input-wrapper warning"> 
          Guess must be in the Dictionary and exactly 5 letters
        </div>)}
      <input 
        id="guess-input" 
        type="text"
        value={wordInput}
        onChange={(event) => 
          setWordInput(event.target.value)
        }
        >
      </input>
    </form>
  );
}

export default GuessInput;
