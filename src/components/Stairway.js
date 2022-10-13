import React from "react";

const Stairway = (props) => {
  const currentStage = props.currentStep;
  const stairwayTemplate = [1, 2, 3, 5, 10, 20, 40, 80, 160, 320, 640, 1250, 2500, 5000, 10000];
  const currentProfit = currentStage === 1 ? 0 : stairwayTemplate[currentStage - 2];
  props.askData(currentProfit);

  const stairway = [];
  for (let i = 15; i > 0; i--) {
    if (i === currentStage) {
      stairway.push(
        <div className="mb-1 col-10 decoration steps currentStep" key={i} id={i}>
          {i % 5 === 0 && (
            <span className="star">
              <i class="bi bi-star-half"></i>
            </span>
          )}
          <span>{stairwayTemplate[i - 1]}</span>
        </div>
      );
    } else if (i > currentStage) {
      stairway.push(
        <div className="mb-1 col-10 decoration steps" key={i} id={i}>
          {i % 5 === 0 && (
            <span className="star">
              <i class="bi bi-star"></i>
            </span>
          )}
          <span>{stairwayTemplate[i - 1]}</span>
        </div>
      );
    } else {
      stairway.push(
        <div className="mb-1 col-10 decoration steps passedStep" key={i} id={i}>
          {i % 5 === 0 && (
            <span className="star">
              <i class="bi bi-star-fill"></i>
            </span>
          )}
          <span className="stepAmount">{stairwayTemplate[i - 1]}</span>
        </div>
      );
    }
  }

  return (
    <React.Fragment>
      <div className="row">{stairway.map((element) => element)}</div>
      <div>{currentProfit}</div>
    </React.Fragment>
  );
};

export default Stairway;
