import React from "react";

function Task({text, category,onDelete}) {
  // console.log(text)
  return (
    <div className="task">
      <div className="label">CATEGORY HERE: {category}</div>
      <div className="text">TEXT HERE: {text}</div>
      <button className="delete" onClick={()=>onDelete(text)}>X</button>
    </div>
  );
}

export default Task;
