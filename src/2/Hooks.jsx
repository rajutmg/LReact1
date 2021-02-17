import React, { useState } from 'react';

// let count = 0;

// const IncNum = () => {
//   console.log('clicked');
//   count++;
// };

const Hooks = () => {
  // useState in Hooks
  const state = useState();
  //   state has to value [var , function ] = useState(var initial value);
  //   where function becomes ta new value and update to old value i.e var
  const [count, setCount] = useState(5);
  function IncNum() {
    setCount(count + 1);
  }

  return (
    <>
      <h1>{count}</h1>
      <button onClick={IncNum}> Click Me ! </button>
    </>
  );
};
export default Hooks;
