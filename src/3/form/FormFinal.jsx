import React, { useState } from 'react';

const FormFinal = () => {
  const [formData, setFullName] = useState({
    fname: '',
    lname: '',
    email: '',
    phone_number: '',
  });

  const inputEvent = (e) => {
    // console.log(e.target.value);
    // console.log(e.target.name);
    // console.log(e.target.placeholder);

    // const value = e.target.value;
    // const name = e.target.name;
    // Destructring array
    const { value, name } = e.target;
    setFullName((preValue) => {
      console.log(preValue);

      return {
        ...preValue,
        [name]: value,
      };

      //   if (name === 'fname') {
      //     return {
      //       fname: value,
      //       lname: preValue.lname,
      //       email: preValue.email,
      //       phone_number: preValue.phone_number,
      //     };
      //   } else if (name === 'lname') {
      //     return {
      //       fname: preValue.fname,
      //       lname: value,
      //       email: preValue.email,
      //       phone_number: preValue.phone_number,
      //     };
      //   } else if (name === 'email') {
      //     return {
      //       fname: preValue.fname,
      //       lname: preValue.lname,
      //       email: value,
      //       phone_number: preValue.phone_number,
      //     };
      //   } else if (name === 'phone_number') {
      //     return {
      //       fname: preValue.fname,
      //       lname: preValue.lname,
      //       email: preValue.email,
      //       phone_number: value,
      //     };
      //   }
    });
  };
  const formSubmit = (e) => {
    e.preventDefault();
    alert('form Submitted');
  };
  return (
    <>
      <h1>
        Hello {formData.fname} {formData.lname} <br />
        {formData.email} <br />
        {formData.phone_number}
      </h1>
      <form onSubmit={formSubmit}>
        <input
          type="text"
          placeholder="First Name"
          value={formData.fname}
          name="fname"
          onChange={inputEvent}
        />{' '}
        <br />
        <input
          type="text"
          placeholder="Last Name"
          value={formData.lname}
          name="lname"
          onChange={inputEvent}
        />{' '}
        <br />
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          name="email"
          onChange={inputEvent}
        />{' '}
        <br />
        <input
          type="number"
          placeholder="Phone Number"
          value={formData.phone_number}
          name="phone_number"
          onChange={inputEvent}
        />{' '}
        <br />
        <button type="submit">Submit Me !</button>
      </form>
    </>
  );
};

export default FormFinal;
