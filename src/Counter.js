import React, { useState } from "react";

const Counter = () => {
  let [count, setCount] = useState(0);
  const increase = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <p>Using hooks: {count}</p>
      <button onClick={increase}>Click</button>
    </div>
  );
};

export default Counter;
