import React from "react";
import PlayerInfo from "./PlayerInfo";

const Body = (props) => {
  return (
    <div>
      <PlayerInfo
        gameStatus={props.gameStatus}
        jokersUsed={props.jokersUsed}
        step={props.curStep}
        OnExitGame={props.OnExitGame}
        currentPlayerProfit={props.currentPlayerProfit}
        questionObject={props.questionObject}
        currentsafeHaven={props.currentsafeHaven}
      />
    </div>
  );
};

export default Body;
