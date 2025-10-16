import { useEffect, useState } from "react";

const UEffect = () => {
  const [num, setNum] = useState(0);
  const [x, setX] = useState(10);
  useEffect(() => {
    console.log("useffect");
  }, [num]);
  return (
    <div>
      <h2>The value of num is {num}</h2>
      <h2>The value of x is {x}</h2>
      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        Increment num
      </button>

      <button onClick={() => setX(x + 1)}>Increment x</button>
    </div>
  );
};
export default UEffect;
