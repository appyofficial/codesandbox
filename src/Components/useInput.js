import React, { useState } from "react";

const UseInput = () => {
  let [state, setState] = useState("");
  const handleChange = e => {
    setState(e.target.value);
  };
  return (
    <div>
      <label htmlFor="text">Email:{state}</label>
      <input type="text" id="text" value={state} onChange={handleChange} />
    </div>
  );
};

export default UseInput;
