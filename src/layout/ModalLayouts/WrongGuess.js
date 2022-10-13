import React from "react";
import classes from "./WrongGuess.module.css";

const WrongGuess = (props) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.header}>Sorry Your Answer Was Wrong!</div>
      <div className={classes.body}>
        You are walikg away with: <span className={classes.profit}>{props.safeHaven}</span> beers!
      </div>
      <div className={classes.actions}>
        <button className={classes.action} onClick={props.onNewGame}>
          New Game
        </button>
        <button className={classes.action} onClick={props.onCancelAction}>
          cancel
        </button>
      </div>
    </div>
  );
};

export default WrongGuess;
