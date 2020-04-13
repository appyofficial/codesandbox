import { useState } from "react";

export default function useInputState(iniVal = "") {
  let [val, setVal] = useState(iniVal);

  const handleVal = e => {
    setVal(e.target.value);
  };

  const reset = e => {
    setVal("");
  };

  return [val, handleVal, reset];
}
