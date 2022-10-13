import React from "react";
import classes from "./StartScreen.module.css";

const StartScreen = (props) => {
  return (
    <div className={classes.wrapper}>
      <button className={classes.startBtn} onClick={props.onStartGame}>
        Start Game
      </button>
    </div>
  );
};

export default StartScreen;
