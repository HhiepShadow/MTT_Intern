import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { Timer } from "../models/Timer";

const TimerView = observer(() => {
    const [timer] = useState<Timer>(() => new Timer());
    
    // useEffect(() => {
    //     const handle = setInterval(() => {
    //         timer.increaseTimer();
    //     }, 1000);

    //     return () => {
    //         clearInterval(handle);
    //     }
    // }, [timer]);

    // setInterval(() => {
    //     timer.increaseTimer();
    // }, 1000);

  return <div>Seconds passed: {timer.secondsPassed}</div>;
});

export default TimerView;
