import React from "react";
import { useState } from "react";
import  Form from './Form';
import Button from 'material-ui/Button';
import addTask from "./AddTasks";


function App (props){

//open form when button on main page is clicked

const [open, setIsOpen] = React.useState(false);

const openForm = () => setIsOpen(true);


//updating tasks
//edit: go to tasks via id -> reopen saved formData -> change data -> 

function editTask(id){

}

function deleteTask(id) {
  const remainingTasks = data.filter((data) => id !== data.id);
  setTasks(remainingTasks);
}


//saved summary listed with option to edit, delete or state the status
return (
    <div>
      <h1>Todo List</h1>
      <div>
      <button onClick={openForm}> Create New Task </button><Form open={open} />
      </div>
      <div>
        <ol>
        {addTask}
        </ol>
      </div>
      </div>
  );


}

export default App;