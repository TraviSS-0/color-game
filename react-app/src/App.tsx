import { useState } from "react";
import "./style.css";
const availableColors = ["Red", "Blue", "Yellow", "Green"];

export default function App() {
  const [userScore, setUserScore] = useState(0);
  const [userHighestScore, setUserHighestScore] = useState(0);
  const [isRestartButtonAvailable, setIsRestartButtonAvailable] =
    useState(false);
  const [randomNumber, setRandomNumber] = useState(
    Math.floor(Math.random() * 4)
  );

  // Function to generate a new random number
  const handleRandomize = () => {
    const newRandomNumber = Math.floor(Math.random() * 4);
    setRandomNumber(newRandomNumber);
  };

  // Handle button click
  const handleButtonClick = (buttonId: number) => {
    let number = buttonId;

    if (number === randomNumber && !isRestartButtonAvailable) {
      setUserScore(userScore + 1);
      handleRandomize();
      if (userScore >= userHighestScore) {
        setUserHighestScore(userHighestScore + 1);
      }
    } else {
      setUserScore(0);
      setIsRestartButtonAvailable(true);
    }
  };

  return (
    <div className="mainFlex">
      <h1 id="YourColor">Your Color is: {availableColors[randomNumber]}</h1>
      <div className="buttons">
        <button
          type="button"
          id="0"
          onClick={() => handleButtonClick(0)}
        ></button>
        <button
          type="button"
          id="1"
          onClick={() => handleButtonClick(1)}
        ></button>
        <button
          type="button"
          id="2"
          onClick={() => handleButtonClick(2)}
        ></button>
        <button
          type="button"
          id="3"
          onClick={() => handleButtonClick(3)}
        ></button>
      </div>
      <h2 id="score">Score: {userScore}</h2>
      <h2 id="highestScore">Your highest score: {userHighestScore}</h2>
      {isRestartButtonAvailable && (
        <button
          type="button"
          id="restart"
          onClick={() => {
            setIsRestartButtonAvailable(false);
            setUserScore(0);
            handleRandomize();
          }}
        >
          Restart
        </button>
      )}
    </div>
  );
}
