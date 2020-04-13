import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import TodoList from "../Components/TodoList";

function Todo() {
  const IniValue = [
    "I am going to do shopping",
    "Write letter.",
    "Complete emails."
  ];
  const [Todo, setTodo] = useState(IniValue);
  return (
    <Paper style={{ width: "100vw", height: "100vh", padding: "20px" }}>
      <AppBar>
        <ToolBar>
          <Typography>Todo List</Typography>
        </ToolBar>
      </AppBar>
      <TodoList todos={Todo} />
    </Paper>
  );
}

export default Todo;
