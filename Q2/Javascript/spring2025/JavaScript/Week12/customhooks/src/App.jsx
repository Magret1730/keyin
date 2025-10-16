import "./App.css";
import useDocTitle from "./hooks/useDocTitle";
import useSmoothScroll from "./hooks/useSmoothScroll";
import useFetch from "./hooks/useFetch";
import useLocalStorage from "./hooks/useLocalStorage";
function App() {
  const [docTitle, setDocTitle] = useDocTitle({ title: "Noman" });
  const [refToScroll, smoothScroll] = useSmoothScroll();
  const [topRef, smoothScrollTop] = useSmoothScroll();
  const { data, loading, error } = useFetch("https://api.github.com/users");
  const [count, setCount] = useLocalStorage("count1");
  const increment = () => {
    setCount(count + 1);
  };
  return (
    <>
      <div>
        <h1>Using Custom Hooks</h1>
        <button onClick={() => setDocTitle("Keyin College")}>
          Change Title
        </button>
        <button onClick={smoothScroll} ref={topRef}>
          Scroll
        </button>

        <p>Count:{count}</p>
        <button onClick={increment}>Increment</button>
        {loading ? <h4>loading....</h4> : <div>{data[3].login}</div>}

        <div style={{ marginTop: "250vh" }} ref={refToScroll}>
          I am at bottom of the page{" "}
          <button onClick={smoothScrollTop}>Scroll to Top</button>
        </div>
      </div>
    </>
  );
}

export default App;
