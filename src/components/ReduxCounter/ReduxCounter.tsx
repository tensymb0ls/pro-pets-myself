import React, { useState } from "react";
import type { RootState } from "../../store/store";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../../store/features/counter/counterSlice";

export function ReduxCounter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  const [inputState, setInputState] = useState<number>(0);

  return (
    <div>
      <div>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <span> {count} </span>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
      </div>
      <input
        type="number"
        value={inputState}
        onChange={(e) => setInputState(+e.target.value)}
      />
      <button onClick={() => dispatch(incrementByAmount(inputState))}>
        ADD
      </button>
    </div>
  );
}
