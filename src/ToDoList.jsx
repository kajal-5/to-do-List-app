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
        if(item.trim()==='') return;
        const update={
            data:item
        }
        
        const res= await axios.post("https://crudcrud.com/api/cd3de4bc8c20462c83f78a6bb970240a/toDolist",update);
        console.log("response",res.data);

        setlist((prev)=> [...prev,res.data]);

        setItem('');
    }
    catch(error)
    {
        console.error("error",e);
    }
  }
  
  
  
  async function handleEdit(id){
    try{
      
      const edititem=list.find((val)=>val._id==id);
      
       const update={
        data:"rasmalai"
        
        };
      
      const res= await axios.put(`https://crudcrud.com/api/cd3de4bc8c20462c83f78a6bb970240a/toDolist/${id}`,update);
      
      
      const updatelist = list.map((val)=> {
        if(val._id==id)
          return { ...val,data:update.data};
        return val;
      });
      setlist(updatelist);
      
    }
    catch(error){
      console.error("error",error);
    }
    
  }
  
  async function handleDelete(id)
  {
    try{
      await axios.delete(`https://crudcrud.com/api/cd3de4bc8c20462c83f78a6bb970240a/toDolist/${id}`);
      const dellist =list.filter((val)=>val._id!==id);
      setlist(dellist);
      
    }
    catch(error)
    {
      console.error("error",error);
    }
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
              <div key={key}>
                 <li>{key} index and your item is {val.data}</li>
                 <button onClick={()=>handleEdit(val._id)}>Edit</button>
                 <button onClick={()=>handleDelete(val._id)}>Delete</button>
              </div>
            
              
            )}
          )}
        </ul>
        
      </div>
    </>);
  
}
export default ToDoList;