import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h3>counter : {count}</h3>
      <div className="flex gap-2 items-center justify-center">
        <button
          className="border-2 px-2"
          onClick={() => setCount((count) => count + 1)}
        >
          +
        </button>
        <button
          className="border-2 px-2"
          onClick={() => setCount((count) => count - 1)}
        >
          -
        </button>
      </div>
    </div>
  );
}

export default Counter;
