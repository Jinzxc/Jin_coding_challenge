import React, { useState, useEffect } from "react";
import Task from "./Task";
import { getTasks, deleteAllTask} from "../services/taskServices";

const TaskList = () => {

  // These tasks gets overwritten when the database is fetched
  const [tasks, setTasks] = useState([
    { task: "test1" },
    { task: "test2" },
    { task: "test3" },
  ]);

  useEffect(() => {
    try {
      getTasks().then((dbData) => {
        let { data } = dbData;
        setTasks(data);
      });
    } catch (error) {
      console.log(error);
    }
  }, [tasks]);

  const deleteAll = () => {
    deleteAllTask();
  }

  return (
    <div className='d-flex flex-column align-items-center pt-2'>
      <h1 className='text-center'>Tasks</h1>
      {/* Delete all included mostly for testing */}
      <button onClick={deleteAll} className="rounded m-1">DELETE ALL</button>
      <div> 
        {tasks.length ? (
          tasks.map((task) => <Task key={task._id} task={task} />)
        ) : (
          <p className='pt-5 text-center'>"No Tasks Created"</p>
        )}
      </div>
    </div>
  );
};

export default TaskList;
