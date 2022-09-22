import React, { useState } from "react";
import Draggable from 'react-draggable';
import { updateTask, deleteTask } from "../services/taskServices"

const Task = ({ task }) => {

  const [taskData, setTask] = useState('');
  const [updating, setUpdating] = useState(false);
  const [validInput, setValidInput] = useState(true);

  const center = 'd-flex justify-content-center align-items-center';

  const updTask = () => {
    try {
      updateTask(task, taskData);
      setTask('');
    } catch (error) {
      console.log(error);
    }
  }

  const delTask = () => {
    try {
      deleteTask(task);
    } catch (error) {
      console.log(error);
    }
  }

  // Code for handling inputs
  const toggleUpdate = () => {
    setUpdating(update => !update);
    setValidInput(true);
  }

  const handleChange = (event) => {
    setTask(event.target.value);
  }

  const handleUpdate = (event) => {
    event.preventDefault();

    setValidInput(true);
    if(taskData === '') {
      setValidInput(false);
      return;
    }

    updTask();
  }

  return (
      <div className={`${center} flex-column pb-3 pt-1 border rounded m-2 bg-light`}>
        {/* The paragraph used to display might work better as an input. A bit annoying if you have to only update one word right now. */}
        <Draggable>
        <p  className="text-light bg-secondary text-center border text-wrap text-break p-3 position-static"
            style={{ width: '400px'}}>
              {`${task.task}`}
        </p>
        </Draggable>
        <div className={`${center}`}>
          <button onClick={delTask} className="rounded m-1">DELETE</button>
          <button onClick={toggleUpdate} className="rounded m-1">UPDATE</button>
        </div>
          {updating &&
          <div className={`${center} flex-column`}>
              <form onSubmit={handleUpdate}>
                <label>
                  Task:
                  <input type="text" name="task" className="ms-1 rounded" value={taskData} onChange={handleChange}/>
                </label>
                <input type="submit" value="Submit" className="ms-2"/>
              </form>
              {!validInput &&
                <p className='text-danger m-1'>
                  Please use a valid input.
                </p>
              }
            </div>
          }
      </div>
  );
};

export default Task;
