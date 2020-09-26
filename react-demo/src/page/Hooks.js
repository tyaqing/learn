import React, { useState, useEffect } from "react";
export default function Hooks() {
  const [count, setCount] = useState(0);
  function inc() {
    setCount(count + 1);
  }

  useEffect(() => {});
  return (
    <div>
      <div>{count}</div>
      <button onClick={inc}>
        <span>+</span>
      </button>
    </div>
  );
}
