import "./App.css";
import Counter from "./components/Counter";
import { CounterContext } from "./context/Counter";
import { useContext } from "react";
import Item from "./components/Item";
import Cart from "./components/Cart";

function App() {
  const counterState = useContext(CounterContext);
  console.log("context", counterState);
  return (
    <>
      <h2>Context Application</h2>
      <h3>Count value is {counterState.count}</h3>
      <Counter />
      {/* <Counter /> */}
      {/* <Counter /> */}
      {/* <Counter /> */}
      <Item name="Mobile phone" price={2000} />
      {/* <Item name="Hard drive" price={1000} />
      <Item name="Keyboard" price={500} /> */}
      <Cart />
    </>
  );
}

export default App;
