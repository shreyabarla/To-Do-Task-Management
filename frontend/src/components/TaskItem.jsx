import { FaEdit, FaTrash } from "react-icons/fa";
import "../styles/TaskItem.css";

function TaskItem({
  task,
  removeTask,
  toggleComplete,
}) {
  return (
    <div className="task-card">

      <div className="task-content">

        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleComplete(task)}
        />

        <span>{task.title}</span>

      </div>

      <div className="task-actions">

        <button
          className="edit-btn">
          <FaEdit />
          Edit
        </button>

        <button
          className="delete-btn"
          onClick={() => {
            console.log("Deleting:", task);
            removeTask(task._id);
          }}
        >
          <FaTrash />
            Delete
          </button>

      </div>

    </div>
  );
}

export default TaskItem;