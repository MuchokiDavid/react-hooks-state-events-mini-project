import React from "react";
import { useState } from "react";

function NewTaskForm(categories) {
  // console.log (categories)
  // const[formData, setFormData]= useState([])
  // const [catData, setCatData]= useState(categories )
  // setCatData(categories)

  return (
    <form className="new-task-form">
      <label>
        Details
        <input type="text" name="text" />
      </label>
      <label>
        Category
        <select name="category">
          {/* render <option> elements for each category here */}
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
