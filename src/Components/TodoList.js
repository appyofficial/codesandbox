import React from "react";
import { List } from "@material-ui/core";
import { ListItem } from "@material-ui/core";
import { ListItemText } from "@material-ui/core";
import { Divider } from "@material-ui/core";

function TodoList(props) {
  return (
    <React.Fragment>
      <div style={{ marginTop: "30px", maxWidth: "500px" }}>
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
      </div>
    </React.Fragment>
  );
}

export default TodoList;
