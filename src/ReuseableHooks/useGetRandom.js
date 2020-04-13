import { useState } from "react";

const useGetRandom = (val = 1) => {
  let [state, setState] = useState(val);

  const getRandom = () => {
    let num = state;
    let ranNum = Math.floor(Math.random() * num);
    setState(ranNum);
  };

  return [state, getRandom];
};

export default useGetRandom;
