import React from "react";

const MainButton = props => {
  return <button onClick={props.onClick}>{props.title}</button>;
};

export default MainButton;
