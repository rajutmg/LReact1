import React, { useState } from 'react';
import './common.css';

const EventHandling = () => {
  let color = '#00753f';

  const [bgColor, updateColor] = useState(color);
  const [text, changeMe] = useState('Click Me');

  const bgChange = () => {
    let newColor = '#014a28';
    updateColor(newColor);
    changeMe('Ouch !!');
  };

  const changeDouble = () => {
    let color = 'black';
    updateColor(color);
    changeMe('Dark !! ');
  };

  return (
    <>
      <div id="box" style={{ backgroundColor: bgColor }}>
        {/* <button onClick={bgChange} onDoubleClick={changeDouble}>
          {text}
        </button> */}
        <button onMouseEnter={bgChange} onMouseLeave={changeDouble}>
          {text}
        </button>
      </div>
    </>
  );
};

export default EventHandling;
