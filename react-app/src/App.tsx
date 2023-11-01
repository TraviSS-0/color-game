import { useState } from "react";
import "./style.css";

export default function App() {
  const availableColors = ["Red", "Blue", "Yellow", "Green"];
  const [userScore, setUserScore] = useState(0);
  const [restartButton, setRestartButton] = useState(false);
  const [randomNumber, setRandomNumber] = useState(
    Math.floor(Math.random() * 4)
  );

  // Function to generate a new random number
  const handleRandomize = () => {
    const newRandomNumber = Math.floor(Math.random() * 4);
    setRandomNumber(newRandomNumber);
  };

  // Handle button click
  const handleButtonClick = (buttonId: string) => {
    const number = parseInt(buttonId, 10);

    if (number === randomNumber && !restartButton) {
      setUserScore(userScore + 1);
      handleRandomize();
    } else {
      setUserScore(0);
      setRestartButton(true);
    }
  };

  return (
    <div className="mainFlex">
      <h1 id="YourColor">Your Color is: {availableColors[randomNumber]}</h1>
      <div className="buttons">
        <button
          type="button"
          id="0"
          onClick={() => handleButtonClick("0")}
        ></button>
        <button
          type="button"
          id="1"
          onClick={() => handleButtonClick("1")}
        ></button>
        <button
          type="button"
          id="2"
          onClick={() => handleButtonClick("2")}
        ></button>
        <button
          type="button"
          id="3"
          onClick={() => handleButtonClick("3")}
        ></button>
      </div>
      <h2 id="score">Score: {userScore}</h2>
      {restartButton && (
        <button
          type="button"
          id="restart"
          onClick={() => {
            setRestartButton(false);
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
