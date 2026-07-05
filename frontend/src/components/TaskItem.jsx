import { FaEdit, FaTrash } from "react-icons/fa";
import "../styles/TaskItem.css";

function TaskItem({ task }) {
  return (
    <div className="task-card">

      <div className="task-content">

        <input type="checkbox" />

        <span>{task.title}</span>

      </div>

      <div className="task-actions">

        <button className="edit-btn">
          <FaEdit />
          Edit
        </button>

        <button className="delete-btn">
          <FaTrash />
          Delete
        </button>

      </div>

    </div>
  );
}

export default TaskItem;