import { range } from '../../utils'

function GuessDisplay({guessList}) {
  console.log(guessList)
  return (
    <div className='guess-results'>
      {range(6).map((rowIndex) => 
        <p key={rowIndex} className='guess'>
          {range(5).map((colIndex) => {
              var charInfo = guessList[rowIndex]?.[colIndex]
              const char = charInfo?.char;
              return (<span key={colIndex} className={`cell ${charInfo?.guessType}`}>
                {char}
              </span>)
            }
            )
          }
        </p>
      )}
    </div>
  );
}

export default GuessDisplay;
