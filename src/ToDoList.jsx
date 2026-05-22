import React from "react";
import {useState} from 'react';
import axios from 'axios';


function ToDoList()
{
  let [item ,setItem]=useState('');
  let [list, setlist]= useState([]);
  
  
  function handleinput(e){
    setItem(e.target.value);
  }
  
  async function handlebutton()
  {
    try
    {
      const data= await axios.post("https://crudcrud.com/api/cd3de4bc8c20462c83f78a6bb970240a/itemslist",{item});
      console.log("data",data);
      if(item.trim()!=='')
      {
        setlist((prev)=> {return [...prev,item];});
      }
      setItem('');
      console.log("setlist",list,"item ",item);
    }
    catch(e)
    {
      console.error("error",e);
    }
  }
  
  
  
  function handleEdit(id){
    const update="rasmalai";
    
    const updatelist= list.map((val,key)=>{
      if(key==id)
      val=update;
      return val;
    });
    
    setlist(updatelist);
    
    
  }
  
  function handleDelete(id)
  {
    const dellist= list.filter((val,key)=> key!==id);
    setlist(dellist);
  }
  
  
  return (
    <>
      <div>
        <input
        type="text"
        value={item}
        placeholder="enter the item"
        onChange={handleinput}/>
        <button onClick={handlebutton}>
          ADD
        </button>
      </div>
      
      <div>
        <ul>
          {list.map((val,key)=> {
            return (
              <div>
                 <li id={key}>{key} index and your item is {val}</li>
                 <button onClick={()=>handleEdit(key)}>Edit</button>
                 <button onClick={()=>handleDelete(key)}>Delete</button>
              </div>
            
              
            )}
          )}
        </ul>
        
      </div>
    </>);
  
}
export default ToDoList;