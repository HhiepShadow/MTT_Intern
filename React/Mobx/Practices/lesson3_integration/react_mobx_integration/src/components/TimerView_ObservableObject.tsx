import { observable } from "mobx";
import { observer } from "mobx-react-lite";
import { useState } from "react";

const TimerView_ObservableObject = observer(() => {
  const [timer] = useState(() =>
    observable({
      secondsPassed: 0,
      increaseTimer() {
        this.secondsPassed += 1;
      },
    })
  );
//   setInterval(() => {
//       timer.increaseTimer();
//   }, 1000);
  return <div>Seconds passed: {timer.secondsPassed}</div>;
});

export default TimerView_ObservableObject;
