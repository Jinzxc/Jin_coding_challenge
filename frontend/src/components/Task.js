import React from "react";
import { updateTask, deleteTask } from "../services/taskServices"

const Task = ({ task }) => {

  // Update task needs testing implementation
  // Might add a hidden div and input for updates
  // For now please Accept the "Cookies"
  const updTask = () => {
    try {
      updateTask("Cookies")
    } catch (error) {
      console.log(error)
    }
  }

  const delTask = () => {
    try {
      deleteTask(task)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='pb-3 pt-1'>
      <p className='text-center'>{`${task.task}`}</p>
      <div>
        <button onClick={delTask}>DELETE</button>
        <button onClick={updTask}>UPDATE</button>
      </div>
    </div>
  );
};

export default Task;
