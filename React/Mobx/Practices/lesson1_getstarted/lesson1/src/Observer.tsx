import { makeAutoObservable } from "mobx";
import { Time } from "./Timer";

export const createTimer = () => {
  return makeAutoObservable<Time>({
    secondPassed: 0,
    increase() {
      this.secondPassed += 1;
    },
    reset() {
      this.secondPassed = 0;
    },
  });
};

// const myTimer = createTimer();
