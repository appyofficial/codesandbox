import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import { TodoList, TodoForm } from "../Components";

function Todo() {
  const IniValue = [
    "मैं खरीदारी करने जा रहा हूं",
    "1 घंटे के लिए पुस्तक पढ़ें।",
    "सभी अलमारी साफ करें।"
  ];
  const [Todo, setTodo] = useState(IniValue);
  const addToDo = todo => {
    setTodo([...Todo, todo]);
  };
  return (
    <div style={{ width: "100vw", height: "100vh", padding: "20px" }}>
      <AppBar>
        <ToolBar>
          <Typography>Todo List</Typography>
        </ToolBar>
      </AppBar>
      <div style={{ maxWidth: "500px", margin: "60px auto" }}>
        <TodoForm addToDo={addToDo} />
        <Divider />
        <TodoList todos={Todo} />
      </div>
    </div>
  );
}

export default Todo;
