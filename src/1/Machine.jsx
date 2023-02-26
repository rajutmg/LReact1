import React from 'react';
import './machine.css';

const SlotMachine = (props) => {
  let x = props.x;
  let y = props.y;
  let z = props.z;
  if (x === y && y === z) {
    return (
      <>
        <h1>
          {' '}
          {x}
          {y}
          {z}{' '}
        </h1>
        <h1 className="match">This is Matching</h1>
      </>
    );
  } else {
    return (
      <>
        <h1>
          {' '}
          {x}
          {y}
          {z}{' '}
        </h1>
        <h1 className="not-match">This is not Matching</h1>
      </>
    );
  }
};

const Machine = () => {
  return (
    <>
      <h1 className="headingStyle">
        Welcome to <span style={{ fontWeight: 700 }}>Slot Machine</span>
      </h1>
      <div className="machineWrap">
        <SlotMachine x="2" y="3" z="3" />
        <SlotMachine x="4" y="4" z="4" />
      </div>
    </>
  );
};

export default Machine;
