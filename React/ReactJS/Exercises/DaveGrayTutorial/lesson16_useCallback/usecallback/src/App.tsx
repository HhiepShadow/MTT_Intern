import { useCallback, useEffect, useState } from "react";
import "./App.css";

function App() {
  const [userInput, setUserInput] = useState<string>("");
  const [result, setResult] = useState<number>(0);

  const [num1] = useState(4);
  const [num2] = useState(5);

  const sum = useCallback(() => num1 + num2, [num1, num2]);

  const buildArray = useCallback((): number[] => [num1, num2], [num1, num2]);

  useEffect(() => {
    // console.log(`New sum. Value: ${sum()}`);
    // setResult(sum());

    console.log(`New array: ${buildArray()}`)
  }, [buildArray]);

  return (
    <div className="App">
      <input
        type="text"
        placeholder="input"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <h1>Output: {userInput || "--"}</h1>
      <p>Result: {JSON.stringify(result)}</p>
    </div>
  );
}

export default App;
