import React, { useState } from 'react';
import './todo.css';
import TodoCom from './TodoCom';

const ToDoMain = () => {
  const [inputList, setInputList] = useState('');
  const [Items, setItems] = useState([]);

  const itemEvent = (e) => {
    setInputList(e.target.value);
  };

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList('');
  };

  const deletItems = (id) => {
    console.log('deleted');
    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div id="todoWrap">
        <h1>To Do List</h1>
        <div className="todoInner">
          <input
            type="text"
            value={inputList}
            onChange={itemEvent}
            placeholder="Type Some Things"
          />
          <button onClick={listOfItems}> + </button>
          <br />
          <ul>
            {/* <li>{inputList}</li> */}
            {Items.map((itemVal, index) => {
              return (
                <TodoCom
                  key={index}
                  id={index}
                  onSelect={deletItems}
                  text={itemVal}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ToDoMain;
