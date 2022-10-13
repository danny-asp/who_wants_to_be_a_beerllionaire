import React from "react";
import classes from "./PlayerInfo.module.css";

const PlayerInfo = (props) => {
  const currentStage = props.step;
  let currentsafeHaven = props.currentsafeHaven;
  const currentProfitOnExit = props.currentPlayerProfit;
  const gameStatus = props.gameStatus;

  return (
    <div className={classes.wrapper}>
      <div>Current Game Status</div>
      <div className="my-3">Stage{currentStage}</div>
      <div className="my-3">Your Safe Haven is: {currentsafeHaven}</div>
      <div className="my-5">Your current proffit is: {currentProfitOnExit}</div>
      <button onClick={props.OnExitGame} className={classes.exit}>
        Exit with {currentProfitOnExit} beers
      </button>
      <div className="mt-5">
        <input type="button" value="HINT on hover" className={classes.btn} />
        <input
          type="text"
          className={classes.correctAnswer}
          placeholder={decodeURIComponent(props.questionObject.correct_answer)}
        />
      </div>
    </div>
  );
};

export default PlayerInfo;
