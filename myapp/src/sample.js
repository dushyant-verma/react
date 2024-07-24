import React, { useState } from "react";
function Counter() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <>
      <div>This is our counter Application</div>
      <div className="flex justify-center ">
        <button onClick={decrement}>-</button>
        <span>Clicks {count}</span>
        <button onClick={increment}>+</button>
      </div>
    </>
  );
}
export default Counter;