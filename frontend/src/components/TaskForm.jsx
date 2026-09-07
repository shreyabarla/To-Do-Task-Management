import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import "../styles/TaskForm.css";

function TaskForm({ addTask }) {
 const [title, setTitle] = useState("");
const [priority, setPriority] = useState("Medium");
const [category, setCategory] = useState("Personal");
const [dueDate, setDueDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim() === "") return;

    addTask({
  title,
  priority,
  category,
  dueDate,
});

    setTitle("");
    setPriority("Medium");
    setCategory("Personal");
    setDueDate("");
  };

  return (
  <form className="task-form" onSubmit={handleSubmit}>
    <input
      className="title-input"
      type="text"
      placeholder="Enter task title"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
    />

    <div className="form-row">
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option>Work</option>
        <option>Study</option>
        <option>Personal</option>
        <option>Shopping</option>
      </select>

      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
    </div>

    <button className="add-btn" type="submit">
      <FaPlus /> Add Task
    </button>
  </form>
);
}

export default TaskForm;