import "./App.css";
import React, { useState } from "react";
import StartScreen from "./layout/StartScreen";
import GameLayout from "./layout/GameLayout";

function App(props) {
  const [gameStatus, setGameStatus] = useState(false);

  const gameStatusHandler = () => {
    setTimeout(() => setGameStatus(!gameStatus), 500);
  };

  return (
    <div className="App">
      {!gameStatus && <StartScreen onStartGame={gameStatusHandler} />}
      {gameStatus && <GameLayout></GameLayout>}
    </div>
  );
}

export default App;
