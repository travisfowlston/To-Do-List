import { useState } from "react";

function ToDoList() {
  // Sets the initial state of the tasks to an empty array
  const [tasks, setTasks] = useState([]);
  // Sets the initial state of the newTask to an empty string
  const [newTask, setNewTask] = useState("");

  // Handles the input change event
  function handleInputChange(event) {
    // Updates the newTask state with the value of the input field
    setNewTask(event.target.value);
  }

  function addTask() {
    // Trims the newTask value and checks if it is not an empty string
    if (newTask.trim() !== "") {
      // Adds any new tasks to the current tasks array using the spread operator
      setTasks((t) => [...t, newTask]);
      // Resets the newTask state to an empty string
      setNewTask("");
    }
  }

  function deleteTask(index) {
    // Filters out the task at the specified index
    const updatedTasks = tasks.filter((_, i) => i !== index);
    // Updates the tasks state with the updated tasks
    setTasks(updatedTasks);
  }

  function moveTaskUp(index) {
    // Checks if the index is greater than 0
    if (index > 0) {
      // Copies the tasks array using the spread operator
      const updatedTasks = [...tasks];
      // Swaps the task at the specified index with the task above it
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      // Updates the tasks state with the updated tasks
      setTasks(updatedTasks);
    }
  }

  function moveTaskDown(index) {
    // Checks if the index is less than the length of the tasks array to protect against out of bounds errors
    if (index < tasks.length - 1) {
      // Copies the tasks array using the spread operator
      const updatedTasks = [...tasks];
      // Swaps the task at the specified index with the task below it
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      // Updates the tasks state with the updated tasks
      setTasks(updatedTasks);
    }
  }

  return (
    <div className="to-do-list">
      <h1>To-Do List</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={handleInputChange}
        />
        <button className="addBtn" onClick={addTask}>
          Add
        </button>
      </div>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button className="deleteBtn" onClick={() => deleteTask(index)}>
              Delete
            </button>
            <button className="moveBtn" onClick={() => moveTaskUp(index)}>
              ☝
            </button>
            <button className="moveBtn" onClick={() => moveTaskDown(index)}>
              👇
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}
export default ToDoList;
