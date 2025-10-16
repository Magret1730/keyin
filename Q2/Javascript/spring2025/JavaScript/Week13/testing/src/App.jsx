import { useState } from "react";
import Users from "./components/Users/Users";
import "./App.css";

function App() {
  const users = ["A", "B", "C"];
  return (
    <>
      <h1>Testing in React</h1>
      <Users users={users} />
    </>
  );
}

export default App;
