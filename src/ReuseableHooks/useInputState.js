import { useState } from "react";

function useInputState(val = "") {
  let [value, setValue] = useState(val);
  const handleChange = e => {
    setValue(e.target.value);
  };
  const reset = () => {
    setValue("");
  };
  return [value, handleChange, reset];
}

export default useInputState;
