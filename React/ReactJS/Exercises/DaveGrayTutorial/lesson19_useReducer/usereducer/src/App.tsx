import { useReducer, ChangeEvent } from "react";
import "./App.css";

type State = {
  userInput: string;
  count: number;
  color: boolean;
};

type Action = {
  type: "increment" | "decrement" | "change" | "color" | "reset";
  payload?: number | string | boolean;
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        count: state.count + 1,
      };
    case "decrement":
      return {
        ...state,
        count: (state.count > 0 && state.count - 1) || 0,
      };
    case "change":
      return {
        ...state,
        userInput: (typeof action.payload === "string" && action.payload) || "",
      };
    case "color":
      return {
        ...state,
        color: !state.color,
      };
    case "reset":
      return {
        ...state,
        count: 0,
      };
    default:
      return state;
  }
};

const App = () => {
  const initialState: State = {
    userInput: "",
    count: 0,
    color: false,
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <input
        type="text"
        value={state.userInput}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          dispatch({ type: "change", payload: e.target.value })
        }
      />
      <br />
      <br />
      <p>{state.userInput}</p>
      <p>{state.count}</p>
      <section>
        <button onClick={() => dispatch({ type: "increment" })}>+</button>
        <button onClick={() => dispatch({ type: "decrement" })}>-</button>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      </section>
    </div>
  );
};

export default App;
