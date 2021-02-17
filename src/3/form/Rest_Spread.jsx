import React from 'react';

// 1st case
const fullName = ['raju', 'tamang'];
const bioData = [1, 26, 'male', ...fullName];
console.log(bioData);

// 2nd case
var shootergame = ['call of Duty', 'Far City', 'Resident Evil'];
var racinggames = ['Need For Speed', 'motoGp', 'Car race'];
const games = [...shootergame, ...racinggames];
console.log(games);

// 3rd case

var shootergame = ['call of Duty', 'Far City', 'Resident Evil'];
const [first, ...remaining] = shootergame;
console.log(first);
console.log(remaining);

// 4th and imp

const fullname = {
  fname: 'Raju',
  lname: 'Tamang',
};
const bio = {
  id: 1,
  age: 21,
  sex: 'male',
  ...fullName,
};
console.log(bio);

const Rest_Spread = () => {
  return <></>;
};

export default Rest_Spread;
