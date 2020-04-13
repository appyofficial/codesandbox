import React from "react";
import "./styles.css";
import PlayCard from "./Experiment";
import UseInput from "./Components/useInput";

export default function App() {
  return (
    <div className="App">
      <h1>React Hooks : The custom hooks.</h1>
      <PlayCard />
      <UseInput />
    </div>
  );
}
