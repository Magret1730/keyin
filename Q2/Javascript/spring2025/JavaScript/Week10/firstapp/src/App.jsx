import About from "./components/About";
import Contact from "./components/Contact";
import History from "./components/History";
import Button from "./components/Button";
import Users from "./components/Users";
function App() {
  return (
    <>
      <h1>Hello</h1>
      <Button
        text="Home"
        color="yellow"
        onClick={() => {
          console.log("Click of Home");
        }}
      />
      <Users />
      <p>This is some text</p>
      <hr />
      {/* <History country="Canada" city="Toronto" population={3000} /> */}
    </>
  );
}

export default App;
