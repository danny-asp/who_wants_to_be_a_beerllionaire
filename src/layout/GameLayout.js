import React, { useEffect, useState } from "react";
import classes from "./GameLayout.module.css";
import Header from "../components/Header";
import Question from "../components/Question";
import Stairway from "../components/Stairway";
import Body from "../components/Body";
import Modal from "../UI/Modal";
import CallAFriend from "../components/Jckers/CallAFriend";
import HelpFromTheCrowd from "../components/Jckers/HelpFromTheCrowd";
import ExitGame from "./ModalLayouts/ExitGame";
import WrongGuess from "./ModalLayouts/WrongGuess";
import Haven from "./ModalLayouts/Haven";
import correctAnswer from "../assets/sounds/correctAnswer.mp3";
import wrongAnswer from "../assets/sounds/wrongAnswer.mp3";
import Loading from "../assets/sounds/Loading.mp3";
import stages from "../assets/sounds/stages.mp3";
import Rules from "./ModalLayouts/Rules";

const GameLayout = () => {
  const [curentDifficulty, setCurrentDifficulty] = useState("easy");
  const [currentStep, setCurrentStep] = useState(1);
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [curQueastionObject, setCurQuestionObject] = useState({});
  const [currentAnswers, setCurrentAnswers] = useState([]);
  const [buttonsDisabaled, setButtonDisabaled] = useState(true);
  const [jokersUsed, setJokerUsed] = useState({
    fiftyFifty: false,
    callAFriend: false,
    helpFromTheCrowd: false
  });
  const [showModal, setShowModal] = useState(true);
  const [gameStatus, setGameStatus] = useState("initial");
  const [newGame, setNewGame] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [playerProfit, setPlayerProfit] = useState(0);
  const [safeHaven, setSafeHaven] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    setNewGame(false);

    const fetchQuestion = async () => {
      const response = await fetch(
        `https://opentdb.com/api.php?amount=1&difficulty=${curentDifficulty}&type=multiple&encode=url3986`
      );
      if (!response.ok) {
        throw new Error("something is wrong");
      }
      const responseData = await response.json();
      const question = responseData.results[0].question;
      console.log("correct answer is:", decodeURIComponent(responseData.results[0].correct_answer));
      setCurrentQuestion(decodeURIComponent(question));
      setCurQuestionObject(responseData.results[0]);
      const ShuffleCurrentAnswers = [
        ...responseData.results[0].incorrect_answers,
        responseData.results[0].correct_answer
      ];
      const ShuffleCurrentAnswers2 = ShuffleCurrentAnswers.map((element) => decodeURIComponent(element));
      ShuffleCurrentAnswers2.sort(() => Math.random() - 0.5);
      setCurrentAnswers(ShuffleCurrentAnswers2);
      setButtonDisabaled(false);
    };
    fetchQuestion();
    setIsLoading(false);
  }, [currentStep, curentDifficulty, newGame]);

  const correctAnswerSoundPlay = () => {
    new Audio(correctAnswer).play();
  };
  const wrongAnswerSoundPlay = () => {
    new Audio(wrongAnswer).play();
  };
  const LoadingSoundPlay = () => {
    new Audio(Loading).play();
  };
  const stagesSoundPlay = () => {
    new Audio(stages).play();
  };

  const OnNewGame = () => {
    setGameStatus("start");
    setJokerUsed({ fiftyFifty: false, callAFriend: false, helpFromTheCrowd: false });
    setCurrentStep(1);
    setCurrentDifficulty("easy");
    setShowModal(false);
    setButtonDisabaled(false);
    setNewGame(true);
    setPlayerProfit(0);
    setSafeHaven(0);
    setShowModal(true);
  };

  const OnExitGame = () => {
    setShowModal(true);
    setGameStatus("exitBtnClicked");
  };

  const fiftyFifty = () => {
    const randomOneIncorrectPlusCorrect = [
      curQueastionObject.incorrect_answers[Math.floor(Math.random() * curQueastionObject.incorrect_answers.length)]
    ];
    const randomOneIncorrectPlusCorrectHelper = randomOneIncorrectPlusCorrect.map((element) =>
      decodeURIComponent(element)
    );
    randomOneIncorrectPlusCorrectHelper.push(decodeURIComponent(curQueastionObject.correct_answer));
    const updatedAnswers = currentAnswers.map((answer) => {
      if (randomOneIncorrectPlusCorrectHelper.includes(answer)) {
        return answer;
      } else {
        return "";
      }
    });
    const updatedJokers = { ...jokersUsed };
    updatedJokers.fiftyFifty = true;
    setJokerUsed(updatedJokers);
    setCurrentAnswers(updatedAnswers);
  };

  const onCallAFriend = () => {
    setShowModal(true);
    setGameStatus("callAFriend");
    const updatedJokers = { ...jokersUsed };
    updatedJokers.callAFriend = true;
    setJokerUsed(updatedJokers);
  };

  const onHelpFromTheCrowd = () => {
    setShowModal(true);
    setGameStatus("HelpFromTheCrowd");
    const updatedJokers = { ...jokersUsed };
    updatedJokers.helpFromTheCrowd = true;
    setJokerUsed(updatedJokers);
  };

  const stepChanger = () => {
    if (currentStep < 5) {
      setCurrentDifficulty("easy");
    }
    if (currentStep >= 5 && currentStep < 11) {
      setCurrentDifficulty("medium");
    }
    if (currentStep >= 10) {
      setCurrentDifficulty("hard");
    }
    setCurrentStep((prev) => prev + 1);
    if (currentStep === 5) {
      stagesSoundPlay();
      setShowModal(true);
      setSafeHaven(10);
      setGameStatus("firstStageWon");
    }
    if (currentStep === 10) {
      stagesSoundPlay();
      setShowModal(true);
      setSafeHaven(320);
      setGameStatus("secondStageWon");
    }
    if (currentStep === 15) {
      stagesSoundPlay();
      setShowModal(true);
      setSafeHaven(10000);
      setGameStatus("finalStageWon");
    }
  };

  const receaveData = (data) => {
    setPlayerProfit(data);
  };

  const defaultAnswerStyle = "mb-1 col-5 decoration answer";

  const blinkCorrectAnswer = (curObject) => {
    curObject.target.className += " blink-effect";
  };

  const selectAnswerHandler = (event) => {
    setButtonDisabaled(true);
    blinkCorrectAnswer(event);
    LoadingSoundPlay();
    if (decodeURIComponent(curQueastionObject.correct_answer) === event.target.textContent) {
      setTimeout(() => {
        correctAnswerSoundPlay();
        event.target.className += " green";
        setTimeout(() => {
          event.target.className = defaultAnswerStyle;
        }, 1200);
        setTimeout(() => {
          stepChanger();
        }, 1200);
      }, 3000);
    } else {
      setTimeout(() => {
        wrongAnswerSoundPlay();
        event.target.className += " orange";
        setTimeout(() => {
          event.target.className = defaultAnswerStyle;
        }, 1200);
        setTimeout(() => {
          setShowModal(true);
          setGameStatus("lost");
          setButtonDisabaled(true);
        }, 1500);
      }, 3000);
    }
  };

  const onCloseModal = (event) => {
    setShowModal(!showModal);
  };

  return (
    <div className={classes.wrapper}>
      {showModal && (
        <Modal onClose={onCloseModal} onNewGame={OnNewGame} currentStep={currentStep}>
          {gameStatus === "exitBtnClicked" && (
            <ExitGame playerProfit={playerProfit} onCancelAction={onCloseModal} onNewGame={OnNewGame} />
          )}
          {gameStatus === "callAFriend" && (
            <CallAFriend
              availableAnswers={currentAnswers}
              correctAnswer={decodeURIComponent(curQueastionObject.correct_answer)}
            />
          )}
          {gameStatus === "HelpFromTheCrowd" && (
            <HelpFromTheCrowd availableAnswers={currentAnswers} curQueastionObject={curQueastionObject} />
          )}
          {gameStatus === "lost" && (
            <WrongGuess safeHaven={safeHaven} onCancelAction={onCloseModal} onNewGame={OnNewGame} />
          )}
          {gameStatus === "finalStageWon" && (
            <Haven
              safeHaven={safeHaven}
              onCancelAction={onCloseModal}
              currentStep={currentStep}
              onNewGame={OnNewGame}
            />
          )}
          {gameStatus === "firstStageWon" && <Haven safeHaven={safeHaven} onCancelAction={onCloseModal} />}
          {gameStatus === "secondStageWon" && <Haven safeHaven={safeHaven} onCancelAction={onCloseModal} />}
          {gameStatus !== "exitBtnClicked" &&
            currentStep === 1 &&
            gameStatus !== "lost" &&
            !jokersUsed.fiftyFifty &&
            !jokersUsed.callAFriend &&
            !jokersUsed.helpFromTheCrowd && <Rules onCancelAction={onCloseModal} />}
        </Modal>
      )}
      <Header
        onClose={onCloseModal}
        fiftyFifty={fiftyFifty}
        callFriend={onCallAFriend}
        onHelpFromTheCrowd={onHelpFromTheCrowd}
        jokerUsage={jokersUsed}
      />

      <div className="row mt-3">
        <div className="col-9">
          <Body
            questionObject={curQueastionObject}
            diff={curentDifficulty}
            curStep={currentStep}
            gameStatus={gameStatus}
            jokersUsed={jokersUsed}
            OnExitGame={OnExitGame}
            loading={isLoading}
            currentPlayerProfit={playerProfit}
            currentsafeHaven={safeHaven}
          ></Body>
        </div>
        <div className="col-3">
          <Stairway currentStep={currentStep} askData={receaveData} />
        </div>
        <div className="col-12">
          {!isLoading && (
            <Question
              question={currentQuestion}
              stepChanger={stepChanger}
              object={curQueastionObject}
              answers={currentAnswers}
              onClick={selectAnswerHandler}
              buttonsDisabaled={buttonsDisabaled}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default GameLayout;
