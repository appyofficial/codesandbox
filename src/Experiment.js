import React from "react";
import useToggle from "./ReuseableHooks/useToggle";
import useGetRandom from "./ReuseableHooks/useGetRandom";
import MainButton from "./Components/MainButton";
import useInputState from "./ReuseableHooks/useInputState";

const PlayCard = () => {
  let [isHappy, setIsHappy] = useToggle(true);
  let [randomNum, setRandomNum] = useGetRandom(10);
  let [email, updateEmail, resetEmail] = useInputState();

  const clickHandler = () => {
    setIsHappy(!isHappy);
  };
  const clickRandom = () => {
    setRandomNum(randomNum);
  };
  return (
    <React.Fragment>
      <div>
        <p>{isHappy ? "I am Happy" : "I am Sad"}</p>
        <MainButton onClick={clickHandler} title="Toggle" />
      </div>
      <div>
        <p>{randomNum}</p>
        <MainButton onClick={clickRandom} title="Random" />
      </div>
      <div>
        <p>My email is {email}</p>
        <input type="email" value={email} onChange={updateEmail} />
        <button onClick={resetEmail}>Subscribe</button>
      </div>
    </React.Fragment>
  );
};

export default PlayCard;
