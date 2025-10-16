import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navigation from './components/Navigation';
import RandomAdvice from './components/RandomAdvice';
import AdviceList from './components/AdviceList';
import { useState, useEffect } from 'react';

function App() {
  const [Advice, setAdvice] = useState([]);
  const [Advices, setAdvices] = useState([]);
  const [count, setCount] = useState(5);

  
  const fetchAdvices = async () => {
      const adviceArray = [];

      for (let i=0; i < count; i++) {
        const res = await fetch("https://api.adviceslip.com/advice");
        const data = await res.json();

        // console.log(data.slip.advice);

        adviceArray.push(data.slip.advice);
      }

      setAdvices(adviceArray);
      // console.log(adviceArray, "ADVICEARRAY");
  }

  const fetchAdvice = async () => {
      const res = await fetch("https://api.adviceslip.com/advice");
      const data = await res.json();

      console.log(data.slip.advice);

      setAdvice(data.slip.advice);
  }

  useEffect((() => {
    fetchAdvice();
    fetchAdvices();
  }), [count, fetchAdvice()]);



  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route
          path="/RandomAdvice"
          element={<RandomAdvice Advice={Advice}/>}
        />
        <Route
          path="/AdviceList"
          element={<AdviceList Advices={Advices} count={count} setCount={setCount} fetchAdvices={fetchAdvices} />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
