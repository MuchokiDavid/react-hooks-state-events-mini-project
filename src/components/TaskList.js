import React, { useState } from "react";
import { TASKS } from "../data";
import Task from "./Task";

function TaskList() {
  const [tasks, setTasks]= useState(TASKS)
  // console.log(tasks)
  function handleDelete(taskText) {
    // Filter out the task with the given text
    const updatedTasks = tasks.filter(task => task.text !== taskText);
    setTasks(updatedTasks);
  }
  return (
    <div>
      {tasks.map((task,index)=>{
          return(
            <li key={index}><Task text= {task.text} category= {task.category} onDelete={handleDelete}/></li>
          )
        })}
      {/* display a list of tasks using Task component */}

    </div>
  );
}

export default TaskList;
