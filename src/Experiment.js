import React from "react";
import useToggle from "./ReuseableHooks/useToggle";
import useGetRandom from "./ReuseableHooks/useGetRandom";
import MainButton from "./Components/MainButton";

const PlayCard = () => {
  let [isHappy, setIsHappy] = useToggle(true);
  let [randomNum, setRandomNum] = useGetRandom(10);
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
    </React.Fragment>
  );
};

export default PlayCard;
