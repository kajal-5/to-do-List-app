import React from "react";
import {useState,useEffect} from 'react';

function ToDo_localstorage ()
{
    const [item, setItem] = useState('');
    const [list, setList] = useState([]);
    
    useEffect(()=>{
        const data= JSON.parse(localStorage.getItem("todolist"));
        if(data)
        setList(data);
        
    },[]);
  
  
  
    useEffect(()=>{
        localStorage.setItem("todolist",JSON.stringify(list));
        console.log(JSON.parse(localStorage.getItem("todolist")));
        
    },[list]);
  
  
  
    function handleInput(e)
    {
        setItem(e.target.value);
    }


    
    function handleButton()
    {
        if(item.trim()!=="")
        {
        setList((prev)=> [...prev,item]);
        }
        setItem('');
    }
    
    
    
    
    function handleEdit(id)
    {


        let value="sweets";
        
        const updatelist = list.map((val,index)=>{
            if(index==id)
                return value;
            return val;
        }

     );
        
        setList(updatelist);
    }
    
    function handleDelete(id)
    {
        const updatelist= list.filter((val,index)=>index!==id);
        setList(updatelist);

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

            {list.map((value,key)=>{
            return (
                <li key={key}>
                
                {key} index and your item is {value}
                
                <button onClick = { ()=>handleEdit(key) } > Edit </button>
                <button onClick = { ()=> handleDelete(key) }> Delete </button>
                
                </li>
            )
            })}
            
        </ul>
        </div>
    </>);
  
}
export default ToDo_localstorage;