import React from "react";
import classes from "./ExitGame.module.css";

const ExitGame = (props) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.header}>Are you shure?</div>
      <div className={classes.body}>
        Your current profit is: <span className={classes.profit}>{props.playerProfit}</span> beers!
      </div>
      <div className={classes.actions}>
        <a href="https://hills.beer/?lang=bg">
          <button className={classes.action}>Exit Game</button>
        </a>
        <button className={classes.action} onClick={props.onNewGame}>
          New Game
        </button>
        <button className={classes.action} onClick={props.onCancelAction}>
          Continue Game
        </button>
      </div>
    </div>
  );
};

export default ExitGame;
