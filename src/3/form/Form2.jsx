import React, { useState } from 'react';

const Form2 = () => {
  // for Fullname
  const [name, getname] = useState('');
  const [fullName, getFullname] = useState('');
  // for Password
  const [password, setPassword] = useState('');
  const [G_password, GetPassword] = useState('');

  //   Getting Value
  const getData = (e) => {
    getname(e.target.value);
  };
  const getData1 = (e) => {
    setPassword(e.target.value);
  };

  //   when form is submit
  const formSubmit = (e) => {
    e.preventDefault();
    getFullname(name);
    GetPassword(password);
  };

  return (
    <>
      <h1>
        Hello {fullName} Your Generated PassWord is {G_password}
      </h1>
      <form onSubmit={formSubmit}>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={getData}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={getData1}
        />
        <br />
        <button type="submit">Submit Me !</button>
      </form>
    </>
  );
};

export default Form2;
