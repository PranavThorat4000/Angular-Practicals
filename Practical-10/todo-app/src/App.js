import React, { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  // Add or Update Task
  const handleAddTask = () => {
    if (!task.trim()) return;

    if (editIndex !== null) {
      const updatedTodos = [...todos];
      updatedTodos[editIndex].text = task;
      setTodos(updatedTodos);
      setEditIndex(null);
    } else {
      setTodos([
        ...todos,
        {
          text: task,
          completed: false,
        },
      ]);
    }

    setTask("");
  };

  // Delete Task
  const handleDelete = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  // Mark Complete / Incomplete
  const toggleComplete = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  // Edit Task
  const handleEdit = (index) => {
    setTask(todos[index].text);
    setEditIndex(index);
  };

  return (
    <div className="app">
      <h1>To-Do List</h1>

      <div className="input-section">
        <input
          type="text"
          value={task}
          placeholder="Enter a task"
          onChange={(e) => setTask(e.target.value)}
        />

        <button onClick={handleAddTask}>
          {editIndex !== null ? "Update" : "Add"}
        </button>
      </div>

      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li
            key={index}
            className={todo.completed ? "completed" : ""}
          >
            <span onClick={() => toggleComplete(index)}>
              {todo.text}
            </span>

            <div className="actions">
              <button onClick={() => handleEdit(index)}>
                Edit
              </button>

              <button onClick={() => handleDelete(index)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
