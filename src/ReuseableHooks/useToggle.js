import { useState } from "react";
//iniVal => Initial Value: Boolean in this case.
//iniVal is set to be fault as default
const useToggle = (iniVal = false) => {
  let [state, setState] = useState(iniVal);
  const toggle = () => {
    setState(!state);
  };
  return [state, toggle];
};

export default useToggle;
