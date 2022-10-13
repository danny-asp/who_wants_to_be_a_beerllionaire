import React from "react";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <div className={classes.wrapper}>
      <p>Jokers:</p>

      <div className={classes.btnContainer}>
        <button
          className={classes.jokerBtn}
          onClick={props.fiftyFifty}
          disabled={props.jokerUsage.fiftyFifty}
          name="50/50"
        >
          <i class="bi bi-symmetry-vertical"></i>
        </button>
        <button className={classes.jokerBtn} onClick={props.callFriend} disabled={props.jokerUsage.callAFriend}>
          <i class="bi bi-telephone-outbound"></i>
        </button>
        <button
          className={classes.jokerBtn}
          onClick={props.onHelpFromTheCrowd}
          disabled={props.jokerUsage.helpFromTheCrowd}
        >
          <i class="bi bi-reception-4"></i>
        </button>
      </div>
    </div>
  );
};

export default Header;
