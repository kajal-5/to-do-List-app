import React from 'react'
import ToDoList from './ToDoList';
import ToDo_localstorage from './ToDo_localstorage';
import Todo_object_localstorage from './Todo_object_localstorage';
function App() {
return (
  <>
    <ToDoList />
    <ToDo_localstorage />
    <Todo_object_localstorage />
  </>
);
  
}

export default App
