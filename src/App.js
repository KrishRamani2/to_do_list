import React, { useState } from "react";
import ReactDOM  from "react";
import './index.css';
import TodoList from "./TodoList";




const App = () =>{
  const [inputList, setInputList]=useState("");
  const [Items,setItems] = useState([]);
  const itemEvent=(event)=>{
    setInputList(event.target.value)
  };
  const listofItems = ()=>{
    setItems((oldItems)=>{
      return [...oldItems,inputList];
    });
    setInputList('');
  };
  const deleteItems =(id)=>{
    setItems((oldItems)=>{
      return oldItems.filter((arrElem,index)=>{
        return index !== id;
      });
    })
};
return(
  <>
  <div className="main_div">
    <div className="center_div">
      <br />
      <h1>ToDo List</h1>
      <br />
      <input type="text" placeholder="Add items" onChange={itemEvent} 
      />
      <button onClick={listofItems}>+</button>
      <ul>
        {Items.map((itemval,index)=>{
          return <TodoList key={index} 
          id={index}
          text = {itemval} 
          onSelect={deleteItems}
          />
          
          })}
      </ul>
    </div>
  </div>
  </>
);
};

export default App;
