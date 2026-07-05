import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import "../styles/TaskForm.css";

function TaskForm({ addTask }) {
  const [title, setTitle] = useState("");

  const handleSubmit = () => {
    if (title.trim() === "") return;

    addTask(title);
    setTitle("");
  };

  return (
    <div className="task-form">
      <input
        type="text"
        placeholder="Enter your task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button onClick={handleSubmit}>
        <FaPlus />
        <span>Add Task</span>
      </button>
    </div>
  );
}

export default TaskForm;