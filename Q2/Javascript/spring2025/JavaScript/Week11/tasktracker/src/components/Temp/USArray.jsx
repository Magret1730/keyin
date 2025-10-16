import { useState } from "react";

const USArray = () => {
  let num = [11, 22, 33, 44];
  const [numbers, setNumbers] = useState(num);
  const changeNumber = () => {
    setNumbers((previousState) => {
      return [...previousState, Math.floor(Math.random() * 50)];
    });
  };
  return (
    <div>
      <ul>
        {numbers.map((n, i) => (
          <li key={i}>{n}</li>
        ))}
      </ul>
      <button onClick={changeNumber}>Change</button>
    </div>
  );
};
export default USArray;
