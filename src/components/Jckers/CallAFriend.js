import React, { useState } from "react";
import classes from "./CallAFriend.module.css";
import SpongeBob from "../../assets/SpongeBob.png";
import MrKrab from "../../assets/MrKrabs.png";
const CallAFriend = (props) => {
  const [dummyFriend, setDummyFriend] = useState(false);
  const [knowledgeableFriend, setknowledgeableFriend] = useState(false);
  const [messageKowlagable, setMessageKnowlagable] = useState("hey");
  const [btnDisabler, setbtnDisabler] = useState(false);

  let messageknowledgeableFriend = "";
  let messageknowledgeableFriendLineTwo = "";
  let messageknowledgeableFriendLineThree = "";
  let messageDummyFriend = "";

  const chanceOfKnowing = Math.floor(Math.random() * 3) + 1;
  const sugestedAnswer = props.availableAnswers.filter((element) => element !== "");
  if (chanceOfKnowing === 1) {
    messageDummyFriend = `I really don't know try with ${sugestedAnswer[0]}`;
  }
  if (chanceOfKnowing === 2) {
    messageDummyFriend = `i am not sure but the right answer must be between ${sugestedAnswer[0]} and ${sugestedAnswer[1]}`;
  }
  if (chanceOfKnowing === 3) {
    messageDummyFriend = `I am sure the right answer is ${sugestedAnswer[1]}`;
  }

  const onDummyFriendSelect = (event) => {
    setbtnDisabler(true);
    setDummyFriend(true);
  };

  const onknowledgeableFriendSelect = (event) => {
    setbtnDisabler(true);
    setknowledgeableFriend(true);

    setTimeout(() => {
      setMessageKnowlagable("hmmm.... i know the answer, but you'll owe me some beers for that !!!!!!!!!!!! ");
    }, 1000);

    setTimeout(() => {
      setMessageKnowlagable((prev) => {
        return prev + "   The right ansewr is ............";
      });
    }, 3000);

    setTimeout(() => {
      setMessageKnowlagable((prev) => {
        return prev + props.correctAnswer;
      });
    }, 6000);
  };

  return (
    <React.Fragment>
      <div className={classes.header}>Pick a friend</div>
      <div className={classes.wrapper}>
        <button className={classes.card} disabled={btnDisabler} onClick={onDummyFriendSelect}>
          <div className={classes.icon}>
            <img src={SpongeBob} alt="SpungeBob" />
          </div>
          <div className={classes.info}>Stupid but bestie</div>
          <div className={classes.name}>Spungebob Sqare</div>
        </button>
        <button className={classes.card} disabled={btnDisabler} onClick={onknowledgeableFriendSelect}>
          <div className={classes.icon}>
            <img src={MrKrab} alt="SpungeBob" />
          </div>
          <div className={classes.info}>Smart but greedy</div>
          <div className={classes.name}>Eugene H. Krabs</div>
        </button>
      </div>
      {dummyFriend && <div className={classes.message}>{messageDummyFriend}</div>}
      {knowledgeableFriend && <div className={classes.message}>{messageKowlagable}</div>}
      {knowledgeableFriend && <div className={classes.message}>{messageknowledgeableFriendLineTwo}</div>}
      {knowledgeableFriend && <div className={classes.message}>{messageknowledgeableFriendLineThree}</div>}
    </React.Fragment>
  );
};
export default CallAFriend;
