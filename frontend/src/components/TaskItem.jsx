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
})
 {
    const [isEditing, setIsEditing] = useState(false);

const [editedTitle, setEditedTitle] = useState(task.title);
  return (
    <div className="task-card">

      <div className="task-content">

        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleComplete(task)}
        />

        {isEditing ? (
  <input
    type="text"
    value={editedTitle}
    onChange={(e) => setEditedTitle(e.target.value)}
    style={{
      padding: "8px",
      width: "250px",
      marginLeft: "10px",
    }}
  />
) : (
  <span>{task.title}</span>
)}

      </div>

      <div className="task-actions">

  {isEditing ? (
    <>
      <button
  className="edit-btn"
  onClick={() => {
    console.log("Save Clicked");
    console.log(task._id);
    console.log(editedTitle);

    editTask(task._id, editedTitle);

    setIsEditing(false);
  }}
>
  <FaSave />
  Save
</button>

      <button
        className="delete-btn"
        onClick={() => {
          setEditedTitle(task.title);
          setIsEditing(false);
        }}
      >
        <FaTimes />
        Cancel
      </button>
    </>
  ) : (
    <>
      <button
        className="edit-btn"
        onClick={() => setIsEditing(true)}
      >
        <FaEdit />
        Edit
      </button>

      <button
        className="delete-btn"
        onClick={() => removeTask(task._id)}
      >
        <FaTrash />
        Delete
      </button>
    </>
  )}

</div>

    </div>
  );
}


export default TaskItem;