import { useState } from "react";
import {
  FaEdit,
  FaTrash,
  FaSave,
  FaTimes,
} from "react-icons/fa";
import "../styles/TaskItem.css";

function TaskItem({
  task,
  removeTask,
  toggleComplete,
  editTask,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);

  return (
  <div className="task-card">
    <div className="task-left">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleComplete(task)}
      />

      <div className="task-details">
  {isEditing ? (
    <input
      className="edit-input"
      type="text"
      value={editedTitle}
      onChange={(e) => setEditedTitle(e.target.value)}
    />
  ) : (
    <>
      <h4 className={task.completed ? "completed" : ""}>
        {task.title}
      </h4>

      <div className="task-meta">
        <span className={`priority ${task.priority.toLowerCase()}`}>
          {task.priority}
        </span>

        {task.dueDate && (
          <span className="due-date">
            📅 {new Date(task.dueDate).toLocaleDateString("en-GB")}
          </span>
        )}
      </div>
          </>
        )}
      </div>
    </div>

    <div className="task-actions">
      {isEditing ? (
        <>
          <button
            className="edit-btn"
            onClick={() => {
              editTask(task._id, editedTitle);
              setIsEditing(false);
            }}
          >
            <FaSave /> Save
          </button>

          <button
            className="delete-btn"
            onClick={() => {
              setEditedTitle(task.title);
              setIsEditing(false);
            }}
          >
            <FaTimes /> Cancel
          </button>
        </>
      ) : (
        <>
          <button
            className="edit-btn"
            onClick={() => setIsEditing(true)}
          >
            <FaEdit /> Edit
          </button>

          <button
            className="delete-btn"
            onClick={() => removeTask(task._id)}
          >
            <FaTrash /> Delete
          </button>
        </>
      )}
    </div>
  </div>
);
}

export default TaskItem;