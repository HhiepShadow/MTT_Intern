import { useCallback, useEffect, useMemo, useState } from "react";
import "./App.css";



function App() {
  const [userNumber, setUserNumber] = useState<string>("");
  const [randomInput, setRandomInput] = useState<string>("");

  const fib = useCallback((n: number): number => {
    return n <= 1 ? 1 : fib(n - 1) + fib(n - 2);
  }, []);
  const fibNumber = useMemo(() => fib(Number(userNumber)), [userNumber, fib]);

  useEffect(() => {
    console.log("New number");
  }, [fibNumber]);

  return (
    <div className="App">
      <label>Fibonacci Sequence: </label>
      <input
        type="number"
        value={userNumber}
        placeholder="Position"
        onChange={(e) => setUserNumber(e.target.value)}
      />
      <p>Number: {fibNumber || "--"}</p>
    </div>
  );
}

export default App;
