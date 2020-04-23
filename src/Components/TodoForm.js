import React from "react";
import TextField from "@material-ui/core/TextField";

import { useInputState } from "../hooks";

const TodoForm = ({ addToDo }) => {
  const [val, handleVal, resetVal] = useInputState("");
  const submitHandler = e => {
    e.preventDefault();
    addToDo(val);
    resetVal();
  };
  return (
    <div style={{ width: "100%" }}>
      <form onSubmit={submitHandler}>
        <TextField style={{ width: "100%" }} value={val} onChange={handleVal} />
      </form>
    </div>
  );
};

export default TodoForm;
