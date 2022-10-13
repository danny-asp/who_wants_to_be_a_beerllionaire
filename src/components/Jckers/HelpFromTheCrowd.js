import React from "react";
import classes from "./HelpFromTheCrowd.module.css";

const HelpFromTheCrowd = (props) => {
  const curQuestion = props.curQueastionObject;
  const sugestedAnswers = props.availableAnswers;
  console.log(sugestedAnswers);
  const result = [0, 0, 0, 0];
  let ballanceNumber = 0;
  const correctAnswerIndex = sugestedAnswers.indexOf(curQuestion.correct_answer);

  for (let i = 0; i < 100; i++) {
    const randomAnswer = Math.floor(Math.random() * 4);
    if (sugestedAnswers[randomAnswer] === "") {
      ballanceNumber += 1;
    } else {
      result[randomAnswer] += 1;
    }
  }

  result[correctAnswerIndex] += ballanceNumber;

  return (
    <React.Fragment>
      <div className={classes.header}>Audience just voted:</div>

      <div className={classes.menu}>
        <div>A</div>
        <div>B</div>
        <div>C</div>
        <div>D</div>
      </div>
      <div className={classes.wrapper}>
        {result.map((element, index) => {
          return (
            <React.Fragment key={Math.random()}>
              <div className={classes.progress}>
                <div className={classes.fill} style={{ height: result[index] + "%" }}></div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
      <div className={classes.menu}>
        <div>{result[0] + "%"}</div>
        <div>{result[1] + "%"}</div>
        <div>{result[2] + "%"}</div>
        <div>{result[3] + "%"}</div>
      </div>
    </React.Fragment>
  );
};

export default HelpFromTheCrowd;
