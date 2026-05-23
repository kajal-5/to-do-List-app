import React from 'react';
import {useState , useEffect} from 'react';
import axios from 'axios'; 

function Todo_Curdapi()
{
  
  let api='https://crudcrud.com/api/752a0c40b581495fa030a92bb054081c';
  
  let [item , setItem] = useState('');
  let [list , setList] = useState([]);
  
  
  useEffect(()=>{
    async function fetchData()
    {
        try{    
            const res = await axios.get(`${api}/todolist`);
            setList(res.data);
        }
        catch(error)
        {
            console.error("error",error);
        }
    }
    fetchData();
    
  },[]);
  
  // useEffect(()=>{
    
  // },[list]);
  
  
  
  
  function handleinput(e)
  {
    setItem(e.target.value);
  }
  
  async function handleAdd()
  {
    try{
      if(item.trim()=='') return ;
      
      const todoitem ={
        // id: Date.now(),
        item
      }
      
      const res = await axios.post(`${api}/todolist`,todoitem);
      
      setList((prev)=>[...prev,res.data]);
      setItem('');
      
      
    }
    catch(error)
    {
      console.error("error",error);
    }
  }
  
  
  async function handleEdit(editid)
  {
    try{
      let promptmsg = prompt("");
      
      if(promptmsg === null ) return;
      
      let edititem ={
        // id: editid,
        item:promptmsg
      }
      const res = await axios.put(`${api}/todolist/${editid}`,edititem);
      
      const updatelist= list.map((val)=>{
        if(val._id===editid)
          { return {...val,item:promptmsg};}
        return val;
      });
      
      setList(updatelist);
    }
    catch(error)
    {
      console.error("error",error);
    }
    
  }
  
  
  
  async function handleDelete(delid)
  {
    try{
      await axios.delete(`${api}/todolist/${delid}`);
      const updatelist= list.filter((val)=>val._id!==delid);
      setList(updatelist);
      
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
        placeholder="Enter the items"
        onChange={handleinput}
        />
        <button onClick={handleAdd}>ADD</button>
      </div>
      
      <div>
        <ul>
          {list.map((val)=>{
            return (
            <div>
              <li key={val._id}>
                your item is {val.item}
              </li>
              
              <button onClick = {()=> handleEdit(val._id)} > Edit </button>
              <button onClick = {()=> handleDelete(val._id)} > Delete </button>
            </div>
            )
          })}
        </ul>
      </div>
    </>)
  
}
export default Todo_Curdapi;
