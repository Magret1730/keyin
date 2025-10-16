import { useState } from "react";
const USObject = () => {
  const obj = {
    name: "Alan Smith",
    age: 20,
    height: 5.8,
    isYoung: true,
  };

  const [person, setPerson] = useState(obj);

  //   const changeState = () => {
  //     setPerson({ name: "Bob Smith" });
  //   };

  const changeState = () => {
    setPerson((previousState) => {
      return { ...previousState, name: "Bob Smith" };
    });
  };
  return (
    <div>
      <h2>{person.name}</h2>
      <h2>{person.age}</h2>
      <h2>{person.height}</h2>
      <h2>{person.isYoung.toString()}</h2>
      <button onClick={changeState}>Change</button>
    </div>
  );
};
export default USObject;
