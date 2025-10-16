import { useState } from "react";

// useState(0) will return two things, name/reference to the value(0) and a function to modify the value

const USComponent = () => {
  const [num, setNum] = useState(0);
  const [name, setName] = useState("Alan Smith");

  const [status, setStatus] = useState(true);

  return (
    <div>
      <h1>{num}</h1>
      <h2>{name}</h2>
      <h3>{status.toString()}</h3>
      <button onClick={() => setNum(num + 1)}>Change</button>
      <button onClick={() => setName("Bob Smith")}>ChangeName</button>
      <h2>{num}</h2>
      <h3>{num}</h3>
      {(document.title = num)}
      {name}
    </div>
  );
};
export default USComponent;
