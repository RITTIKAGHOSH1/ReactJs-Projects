import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  function increase() {
    setCount((prev) => prev + 1);
  }
  function decrease() {
    if (count >= 1) {
      setCount(count - 1);
    }
  }

  function increaseBy5() {
    setCount(count + 5);
  }

  return (
    <div className="content">
      <div>
        <div className="heading">
          <h1>{count}</h1>
        </div>
        <div className="buttons">
          <button onClick={increase}>Increase</button>
          <button onClick={decrease}>Decrease</button>
          <button onClick={increaseBy5}>Increase +5</button>
        </div>

        <div className="reset">
          <button onClick={()=> setCount(0)}>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default App;
