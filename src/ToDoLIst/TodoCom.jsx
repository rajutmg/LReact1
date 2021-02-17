import React from 'react';

const TodoCom = (props) => {
  return (
    <>
      <li>
        {props.text}
        <i
          className="fas fa-times"
          onClick={() => {
            props.onSelect(props.id);
          }}
        ></i>
      </li>
    </>
  );
};

export default TodoCom;
