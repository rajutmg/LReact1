import React, { useState } from 'react';

const Form3 = () => {
  const [fullName, setFullName] = useState({
    fname: '',
    lname: '',
  });

  const inputEvent = (e) => {
    // console.log(e.target.value);
    // console.log(e.target.name);
    // console.log(e.target.placeholder);
    const value = e.target.value;
    const name = e.target.name;

    setFullName((preValue) => {
      console.log(preValue);
      if (name === 'fname') {
        return {
          fname: value,
          lname: preValue.lname,
        };
      } else if (name === 'lname') {
        return {
          fname: preValue.fname,
          lname: value,
        };
      }
    });
  };
  const formSubmit = (e) => {
    e.preventDefault();
    alert('form Submitted');
  };
  return (
    <>
      <h1>
        Hello {fullName.fname} {fullName.lname}
      </h1>
      <form onSubmit={formSubmit}>
        <input
          type="text"
          placeholder="First Name"
          value={fullName.fname}
          name="fname"
          onChange={inputEvent}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={fullName.lname}
          name="lname"
          onChange={inputEvent}
        />
        <button type="submit">Submit Me !</button>
      </form>
    </>
  );
};

export default Form3;
