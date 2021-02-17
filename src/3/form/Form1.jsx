import React, { useState } from 'react';

const Form1 = () => {
  const hello = '';

  const [name, gainValue] = useState(hello);
  const [fullName, setFullName] = useState();

  const inputEvent = (event) => {
    gainValue(event.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setFullName(name);
  };

  return (
    <>
      <h1>Hello {fullName}</h1>
      <form onSubmit={onSubmit}>
        <div>
          <input
            type="text"
            placeholder="Your Name Please"
            onChange={inputEvent}
            value={name}
          />
        </div>
        <button type="submit">Click Me !</button>
      </form>
    </>
  );
};
export default Form1;
