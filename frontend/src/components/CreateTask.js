import React, { useState } from "react";
import { addTask } from "../services/taskServices"

const CreateTask = () => {

  // Tasks are currently one value
  // Should the object become more complicated, useReducer might be better
  const [taskData, setTask] = useState('');

  const [validInput, setValidInput] = useState(true);
  const [submitted, setSubmit] = useState(false);
  const [submitSucess, setSubmitState] = useState(true);

  const center = 'd-flex justify-content-center align-items-center';

  const handleChange = (event) => {
    setTask(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmit(true);
    
    setValidInput(true);
    if(taskData === '') {
      setValidInput(false);
      return;
    }

    try {
      addTask(taskData);
      setSubmitState(true);
      setTask('');
    } catch (error) {
      console.log(error);
      setSubmitState(false);
    }
  }

  return (
    <div>
      <p className={`${center} flex-column pt-5`}>
        Create Task Component
      </p>
      <form onSubmit={handleSubmit} className={`${center}`}>
        <label>
          Task:
          <input type="text" name="task" value={taskData} onChange={handleChange} className="ms-1"/>
        </label>
        <input type="submit" value="Submit" className="ms-2"/>
      </form>
      <div className={`${center}`}>
      {submitted && 
            (!validInput
              ? <p className='text-danger'>
                  Please use a valid input.
                </p>
              : (submitSucess
                  ? <p className='text-success'>
                      Created task.
                    </p>
                  : <p className='text-danger'>
                      Failed to create task.
                    </p>
                )
            )
      }
      </div>
    </div>
  );
};

export default CreateTask;
