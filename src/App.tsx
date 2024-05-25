import { useState } from "react";

import "./App.css";
import { increment, decrement } from "./redux/slicer";
import { useDispatch, useSelector } from "react-redux";
function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);
  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        count is {count}
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
