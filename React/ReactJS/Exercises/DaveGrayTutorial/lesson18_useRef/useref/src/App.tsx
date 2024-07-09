import { ChangeEvent, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [randomInput, setRandomInput] = useState<string>("");
  const [seconds, setSeconds] = useState<number>(0);

  const renders = useRef(0);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const timerId = useRef(0);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRandomInput(e.target.value);
    renders.current++;
  };
  
  const startTimer = () => {
    timerId.current = setInterval(() => {
      renders.current++;
      setSeconds(prev => prev + 1);
    }, 1000);

    inputRef?.current?.focus();
  }

  const stopTimer = () => {
    clearInterval(timerId.current);
    timerId.current = 0;
    inputRef?.current?.focus();
  }

  const resetTimer = () => {
    stopTimer();
    if (seconds) {
      renders.current++;
      setSeconds(0);
    }
    inputRef?.current?.focus();
  }

  return (
    <div className="App">
      <input
        ref={inputRef}
        type="text"
        placeholder="Random Input"
        value={randomInput}
        onChange={handleChange}
      />
      <p>Renders: {renders.current}</p>
      <br />
      <section>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </section>
      <br />
      <p>Seconds: {seconds}</p>
      <br />
      <p>{randomInput}</p>
    </div>
  );
}

export default App;
