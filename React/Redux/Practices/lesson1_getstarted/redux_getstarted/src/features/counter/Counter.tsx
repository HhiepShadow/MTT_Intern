import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "./counterSlice";
import { store } from "../../store/store";
import { useState } from "react";

type RootState = ReturnType<typeof store.getState>;
type CounterDispatch = typeof store.dispatch;

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch<CounterDispatch>();

  const [incrementAmout, setIncrementAmount] = useState<number>(0);

  const addValue: number = incrementAmout || 0;

  const resetAll = () => {
    setIncrementAmount(0);
    dispatch(reset());
  };
  return (
    <section>
      <p>{count}</p>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
      <input
        type="text"
        value={incrementAmout}
        onChange={(e) => setIncrementAmount(Number(e.target.value))}
      />
      <div>
        <button onClick={() => dispatch(incrementByAmount(addValue))}>
          Add Amount
        </button>
        <button onClick={() => resetAll()}>Reset</button>
      </div>
    </section>
  );
};

export default Counter;
