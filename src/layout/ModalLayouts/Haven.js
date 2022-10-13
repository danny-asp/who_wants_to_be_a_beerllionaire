import React from "react";
import classes from "./Haven.module.css";

const Haven = (props) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.header}>Congrats!!!</div>
      <div className={classes.body}>
        You have secured <span className={classes.profit}>{props.safeHaven}</span> beers!
      </div>
      <div className={classes.actions}>
        {props.currentStep !== 16 && (
          <button className={classes.action} onClick={props.onCancelAction}>
            Continue Game
          </button>
        )}
        {props.currentStep === 16 && (
          <button className={classes.action} onClick={props.onNewGame}>
            Start New Game
          </button>
        )}
      </div>
    </div>
  );
};

export default Haven;
