import addTasks from "./AddTasks";
import { useState } from 'react';
import React from 'react';
import './DropdownComponent.css';
//import {TextField} from '@material-ui/core';

interface FormProps {
  onSubmit: (data: FormData) => void;
}

//note to use nanoid to add random number for id
//increment counter for userid
interface FormData {
    id: number,
    title: string,
    description: string,
    dueDate:Date,
    item: number,
    userid: number,
    displayName: string,
    assignee: ['userid','displayName'],
    priorityLevel: string,
    notes:string,
    status: string,
    data : Array<{[id,title,description,dueDate,item,userid,displayName,assignee,priorityLevel,notes,status]}>;
}
//need and array to store forms

function Form(props) {

    const [formdata, setformdata ] = useState([{title:'',description:'',dueDate:0,assignee:[0,''],priorityLevel: '', notes: '', status:''}]);


  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { title} = event.target;
    setformdata([{ title:'',description:'',dueDate:0,assignee:[0,''],priorityLevel: '', notes: '', status:''}]);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    //send to the array of created tasks or to .json file for local storage
    onSubmit(props);
  }

  function onSubmit(props){
    return (
        {addTasks}
//and store in larger abbreviated list
//alert(JSON.stringify(data));
this.setState({
    data: this.state.data.concat([{ props}]),
  });

    )
  }

//could change colour of dropdown component for completion and priority
  function DropdownComponent2 (){
    const [isOpen2, setIsOpen2] = useState(false);
   const priority = ['Low', 'Medium', 'High'];

}

   

//fix syntax for using typescript variables in form
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input value={Form.title} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Description:
        <input value={FormData.description} onChange={handleInputChange} />
      </label>
      <br />
      <br />
      <label>
        Date:
        <input value={FormData.dueDate} onChange={handleInputChange} />
      </label>
      <br />
      <br />
      <label>
        Assignee:
        <input value={FormData.assignee} onChange={handleInputChange} />
      </label>
      <br />
      <br />
      <button className="dropdown-danger-toggle" onClick={() => setIsOpen2(!isOpen2)}> 
          Priority:
          </button>
          {isOpen2 && 
                  <div>
                     <div disabled>
                           Non-Interactive Item
                       </div>
                      {DropdownComponent2.priority.map((item, index) => ( {item}))}
                      </div>
          }
      <label>
        Notes:
        <input value={FormData.notes} onChange={handleInputChange} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

//form validation to ensure task at least has a. title

function validateForm() {
    let x = document.forms["Form"]["title"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }

export default Form; 


    


