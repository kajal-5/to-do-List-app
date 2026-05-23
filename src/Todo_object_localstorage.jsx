import React from "react";
import {useState,useEffect} from 'react';

function Todo_object_localstorage ()
{
    const [item, setItem] = useState('');
    const [list, setList] = useState([]);
  
  useEffect(()=>{
    setList(JSON.parse(localStorage.getItem("todos")));
    
  },[]);
  
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(list));
  },[list]);

    
    
    
    function handleInput(e)
    {
      setItem(e.target.value);
    }
    
    function handleButton()
    {
      
      if(item.trim()=='') return;
      
      let itemobj ={
        id : Date.now(),
        item
      }
      
      setList((prev)=>[...prev,itemobj]);
      
      // console.log("item ",item , "list",list);
      setItem("");
    }

    function handleEdit(id)
    {
      let edititem =prompt("");
      if(edititem===null) return;
      
      const editlist=list.map((val)=>
      {
        if(val.id==id)
        {
          return {...val , item:edititem};
        }
        return val;
      });
      
      setList(editlist);
      
    }
    
    
    
    
    function handleDelete(id)
    {
      const dellist=list.filter((val)=>val.id!==id);
      setList(dellist);
    }
    
    return (<>
        <div>
        <input
        type="text"
        value={item}
        placeholder="enter the product"
        onChange={handleInput}
        />
        <button onClick={handleButton}>ADD</button>
        </div>
        <div>
        <ul>

            {list.map((value,index)=>{
            return (
                <li key={value.id}>
                
                {index} index and your item is {value.item}
                
                <button onClick = { ()=>handleEdit(value.id) } > Edit </button>
                <button onClick = { ()=> handleDelete(value.id) }> Delete </button>
                
                </li>
            )
            })}
            
        </ul>
        </div>
        </>);
    
  
}
export default Todo_object_localstorage;