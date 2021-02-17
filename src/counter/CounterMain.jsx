import React, { useState } from 'react';
import './counter.css';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import Clock from 'react-digital-clock';

const CounterMain = () => {
  const [counter, setCounter] = useState(0);

  const IncreaseNum = () => {
    var count = counter;
    setCounter(count + 1);
  };
  const DecreaseNum = () => {
    var count = counter;
    if (count <= 0) {
      alert('Sorry Zero Limit Reached');
    } else {
      setCounter(count - 1);
    }
  };
  return (
    <>
      <div className="counterHolder">
        <div className="counterInner">
          <div className="clock">
            <Clock />
          </div>
          <h1>Counter</h1>
          <h2>{counter}</h2>
          <Tooltip title="Add">
            <Button
              variant="contained"
              color="primary"
              className="button"
              onClick={IncreaseNum}
            >
              <AddIcon />
            </Button>
          </Tooltip>
          <Tooltip title="Remove">
            <Button
              variant="outlined"
              color="primary"
              className="button delBtn"
              onClick={DecreaseNum}
            >
              <RemoveIcon />
            </Button>
          </Tooltip>
        </div>
      </div>
    </>
  );
};
export default CounterMain;
