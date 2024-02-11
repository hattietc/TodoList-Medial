import React from "./react";
import './DropdownComponent.css';
import App from "./App";

//concise tasks for list display on main app

function addTask(props) {
    const newTask = { id: 0, title:'' };
    setTasks([...tasks, newTask]);
  

//function for status of the task dropdown menu

function DropdownComponent (){
           const [isOpen, setIsOpen] = useState(false);
          const status = ['Pending', 'In progress', 'Completed','Canceled'];
          <button className="dropdown-danger-toggle" onClick={() => setIsOpen(!isOpen)}> Status </button>
}
    return (
      <li>
        <div>
          <label htmlFor={props.id}>
            {props.title}
          </label>
          <button onClick={() => props.editTask(props.id)}>
            Edit 
          </button>
          <button onClick={() => props.deleteTask(props.id)}>
            Delete 
          </button>
          <button className="dropdown-danger-toggle" onClick={() => setIsOpen(!isOpen)}> 
          Status 
          </button>
          {isOpen && 
                  <div>
                     <div disabled>
                           Non-Interactive Item
                       </div>
                      {DropdownComponent.status.map((item, index) => ( {item}))}
                      </div>
          }
          </div>
      </li>
    );
        }
  export default addTask;
