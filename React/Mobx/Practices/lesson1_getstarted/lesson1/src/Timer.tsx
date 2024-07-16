import { observer } from "mobx-react-lite";

export interface Time {
  secondPassed: number;
  increase: () => void;
  reset: () => void;
}

const Timer = observer(({ timer }: { timer: Time }) => (
  <button onClick={() => timer.reset()}>
    Seconds passed: {timer.secondPassed}
  </button>
));

export default Timer;
