import { useState } from 'react';
import './counterStyle.css';
export default function Counter() {
  const [count, setCount] = useState(0);

  function handleAdd() {
    // count += 1;
    setCount(count + 1);
    console.log(count);
  }

  function handleSub() {
    setCount(count - 1);
  }

  function handleReset() {
    setCount(0);
  }

  return (
    <div className="Counter">
      <div className="box">
        <h2>Counter Example</h2>
        <p>{count}</p>
        <button className="btn add" onClick={handleAdd}>
          Add
        </button>
        <button className="btn sub" onClick={handleSub}>
          Sub
        </button>
        <button className="btn reset" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
}
