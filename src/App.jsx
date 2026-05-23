import React from 'react'
import ToDoList from './ToDoList';
import ToDo_localstorage from './ToDo_localstorage';
import Todo_object_localstorage from './Todo_object_localstorage';
import Todo_Curdapi from './Todo_Curdapi';
function App() {
return (
  <>
    {/* <ToDoList />
    <ToDo_localstorage />
    <Todo_object_localstorage /> */}
    <Todo_Curdapi />
  </>
);
  
}

export default App
