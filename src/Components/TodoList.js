import React from "react";
import { Paper } from "@material-ui/core";
import { List } from "@material-ui/core";
import { ListItem } from "@material-ui/core";
import { ListItemText } from "@material-ui/core";
import { Divider } from "@material-ui/core";

function TodoList(props) {
  return (
    <React.Fragment>
      <Paper
        style={{ marginTop: "70px", maxWidth: "500px", margin: "60px auto" }}
      >
        <List style={{ padding: "20px" }}>
          {props.todos.map(todo => (
            <React.Fragment>
              <ListItem style={{ padding: "20px" }}>
                <ListItemText>{todo}</ListItemText>
              </ListItem>
              <Divider />
            </React.Fragment>
          ))}
        </List>
      </Paper>
    </React.Fragment>
  );
}

export default TodoList;
