import { useState } from "react";
import "./style.css";

export default function App() {
  // tablica z dostepnymi kolorami
  const avaliableColors = ["Red", "Blue", "Yellow", "Green"];
  const [userScore, setUserScore] = useState(0);
  const [userTopScore, setUserTopScore] = useState(0);

  const [randomNumber, setRandomNumber] = useState(
    Math.floor(Math.random() * 4)
  );

  // Funkcja do losowania nowej liczby
  const handleRandomize = () => {
    const newRandomNumber = Math.floor(Math.random() * 4);
    setRandomNumber(newRandomNumber);
  };

  //handleButtonClick
  const handleButtonClick = (buttonId: string) => {
    const number = parseInt(buttonId, 10);

    if (number === randomNumber) {
      //DODAĆ SCORE!!!
      setUserScore(userScore + 1);
      handleRandomize();
    } else {
      alert('You Lost! click "OK" to restart and try again');
      setUserScore(0);
      handleRandomize();
    }
  };

  if (userScore > userTopScore) {
    setUserTopScore(userTopScore + 1);
  }

  return (
    <div className="mainFlex">
      <h1 id="YourColor">Your Color is: {avaliableColors[randomNumber]} </h1>
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
      <h2 id="topScore">Your top score: {userTopScore}</h2>
    </div>
  );
}
