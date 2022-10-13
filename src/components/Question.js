import React from "react";
// import classes from "./Question.module.css";

const Question = (props) => {
  return (
    <React.Fragment>
      <div className="row">
        <div className="mb-1 col-12 decoration question">{decodeURIComponent(props.object.question)}</div>

        <div className="col-1" id="spacer"></div>
        <button
          className={props.answers[0] !== "" ? "mb-1 col-5 decoration answer" : "col-5 decoration answer-disabaled"}
          disabled={props.buttonsDisabaled}
          onClick={props.onClick}
        >
          {decodeURIComponent(props.answers[0])}
        </button>
        <button
          className={props.answers[1] !== "" ? "mb-1 col-5 decoration answer" : "col-5 decoration answer-disabaled"}
          disabled={props.buttonsDisabaled}
          onClick={props.onClick}
        >
          {props.answers[1]}
        </button>
        <div className="col-1" id="spacer"></div>
        <div className="col-1" id="spacer"></div>
        <button
          className={props.answers[2] !== "" ? "mb-1 col-5 decoration answer" : "col-5 decoration answer-disabaled"}
          disabled={props.buttonsDisabaled}
          onClick={props.onClick}
        >
          {props.answers[2]}
        </button>
        <button
          className={props.answers[3] !== "" ? "mb-1 col-5 decoration answer" : "col-5 decoration answer-disabaled"}
          disabled={props.buttonsDisabaled}
          onClick={props.onClick}
        >
          {props.answers[3]}
        </button>

        <div className="col-1" id="spacer"></div>
      </div>
    </React.Fragment>
  );
};

export default Question;
