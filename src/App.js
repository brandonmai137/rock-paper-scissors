import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandRock, faHandPaper, faHandScissors } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { playRound, getComputerSelection } from "./Game/GameLogic";
import './App.css'

function App() {

  const [playerSelection, setPlayerSelection] = useState(null);

  const [computerSelection, setComputerSelection] = useState(null);
  const [result, setResult] = useState("");
  const [playerScore, setPlayerScore] = useState(0)
  const [computerScore, setComputerScore] = useState(0);
  const [gameOver, setGameOver] = useState(false)
  const [moves, setMoves] = useState(0);
  const [rounds, setRounds] = useState(0);


  useEffect(
    () => {
      // if (computerSelection) {
      //   console.log(computerSelection)
      //   const gameResult = playRound(playerSelection, computerSelection);
      //   setResult(gameResult);
        playRound(playerSelection,computerSelection).then(setResult)
        setRounds(rounds + 1);
      // }
    }, [moves]
  )

  useEffect(
    () => {
      if (result === "win") {
        let newPlayerScore = playerScore + 1
        setPlayerScore(newPlayerScore);
      }
      else if (result === "lose") {
        let newComputerScore = computerScore + 1
        setComputerScore(newComputerScore);
      }
      console.log(result);

    }, [rounds]
  )


  useEffect(
    () => {
      if (playerScore == 5 || computerScore == 5) {
        setGameOver(true);
      }
    }, [playerScore, computerScore]
  )


  function handleSelect(evt) {
    
    if (gameOver === false) {
      setMoves(moves + 1)
      if (evt.target.getAttribute("value") === "rock") {
        setPlayerSelection(1);
      }
      else if (evt.target.getAttribute("value") === "paper") {
        setPlayerSelection(2);
      }
      else if (evt.target.getAttribute("value") === "scissors") {
        setPlayerSelection(3);
      }
      
      setComputerSelection(getComputerSelection());
    }
  }

  function resetGame(){
    setComputerSelection(null);
    setPlayerSelection(null);
    setPlayerScore(null);
    setComputerScore(null);
    setResult(null);
    setGameOver(false);
    setMoves(0);
  }


  return (
    <div className='body'>
      <div className='header'>
        <h1>Rock Paper Scissors</h1>
      </div>
      <div className='move'>
        <h1>Your Move</h1>
        <h1>Computer Move</h1>
      </div>
      <div className='selection'>
        <div className='selection-container-player'>
          <div className='icon-div'>
            {playerSelection === 1 && <FontAwesomeIcon className="icon" icon={faHandRock} />}
          </div>
          <div className='icon-div'>
            {playerSelection === 2 && <FontAwesomeIcon className="icon" icon={faHandPaper} />}
          </div>
          <div className='icon-div'>
            {playerSelection === 3 && <FontAwesomeIcon className="icon" icon={faHandScissors} />}
          </div>
        </div>
        <h1>VS</h1>
        <div className='selection-container-computer'>
          <div className='icon-div'>
            {computerSelection === 1 && <FontAwesomeIcon className="icon-comp" icon={faHandRock} />}
            {computerSelection === 2 && <FontAwesomeIcon className="icon-comp" icon={faHandPaper} />}
            {computerSelection === 3 && <FontAwesomeIcon className="icon-comp" icon={faHandScissors} />}
          </div>
        </div>
      </div>
      <div className='score'>

        <div> <h2>Player: {playerScore}</h2></div>
        <div><h2>Computer: {computerScore}</h2></div>

      </div>
      <div className='result'>
        {result == "win" && <h4>Nice!</h4>}
        {result == "lose" && <h4>Ouch!</h4>}
        {result == "tie" && <h4>Tie</h4>}
      </div>

      <div>
        <div className='move-select-caption'>
          <h3>Select a move:</h3>
        </div>
        <div className='move-select'>
          <FontAwesomeIcon className="icon" value="rock" icon={faHandRock} onClick={handleSelect} />
          <FontAwesomeIcon className="icon" value="paper" icon={faHandPaper} onClick={handleSelect} />
          <FontAwesomeIcon className="icon" value="scissors" icon={faHandScissors} onClick={handleSelect} />
        </div>
        <div className='game-over'>
          {gameOver == true &&
            <h1> GAME OVER
              {playerScore == 5 && <> PLAYER WINS</>}
              {computerScore == 5 && <> COMPUTER WINS</>}
            </h1>}
        </div>
        <div className='play-again'>
          {gameOver == true && <button className='play-again-button' onClick={resetGame}>Play Again</button>}
        </div>
      </div>

      <footer className="footer">
      <p>
        Copyright ©
          {(new Date().getFullYear())}
        <> brandonmai137 </>
        <a href="https://github.com/brandonmai137"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a>
      </p>
    </footer>
    </div>
  );
}

export default App;
