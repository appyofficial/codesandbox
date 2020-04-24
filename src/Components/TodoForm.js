import React from "react";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";

import { useInputState } from "../hooks";

const TodoForm = ({ addToDo }) => {
  const [val, handleVal, resetVal] = useInputState("");
  const submitHandler = e => {
    e.preventDefault();
    addToDo(val);
    resetVal();
  };
  return (
    <Paper style={{ width: "100%", padding: 20 }}>
      <form onSubmit={submitHandler}>
        <TextField style={{ width: "100%" }} value={val} onChange={handleVal} />
      </form>
    </Paper>
  );
};

export default TodoForm;
