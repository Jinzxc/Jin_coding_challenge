import React, { useState } from "react";
import { addTask } from "../services/taskServices"

const CreateTask = () => {

  // Tasks are currently one value
  // Should the object become more complicated, useReducer might be better
  const [taskData, setTask] = useState('');

  const handleChange = (event) => {
    // Might need a check for inputs
    setTask(event.target.value);
  }

  // Could add success and failure banner
  // Will add sound if time permits
  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      addTask(taskData);
      setTask('');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
    <p className='d-flex flex-column align-items-center pt-5'>
      Create Task Component
    </p>
    <form onSubmit={handleSubmit} className='d-flex justify-content-center align-items-center'>
      <label>
        Task:
        <input type="text" name="task" value={taskData} onChange={handleChange} className="ms-1"/>
      </label>
      <input type="submit" value="Submit" className="ms-2"/>
    </form>
    </div>
  );
};

export default CreateTask;
