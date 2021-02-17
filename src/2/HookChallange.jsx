import React, { useState } from 'react';

const HookChallange = () => {
  let newTime = new Date().toLocaleTimeString();

  const [cTime, updateTime] = useState(newTime);

  const GetTime = () => {
    let get_n_Time = new Date().toLocaleTimeString();
    updateTime(get_n_Time);
  };
  //   for Digital Clock
  setInterval(GetTime, 1000);

  return (
    <>
      <h1>{cTime}</h1>
      {/* <button onClick={GetTime}> Get Time </button> */}
    </>
  );
};

export default HookChallange;
