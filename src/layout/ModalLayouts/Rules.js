import React from "react";
import classes from "./Rules.module.css";

const Rules = (props) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.header}>Rules</div>
      <div className={classes.body}>
        <p className="mt-3">You must answer 15 multiple-choice questions correctly in a row to win the jackpot.</p>
        <p>For each correct answer you will recieve Beers</p>
        <p>You may quit at any time and keep their earnings. </p>
        <p>If at any stage you answer incorrectly, you fall back to the last "guarantee point"</p>
        <p>You have three "guarantee point" at 10, 320 and 10000 beers!</p>
        <p>The Grand Price is 10000 Beers</p>
        <p></p>
        <p></p>
      </div>
      <div className={classes.actions}>
        <button className={classes.action} onClick={props.onCancelAction}>
          Lets Play!
        </button>
      </div>
    </div>
  );
};

export default Rules;
