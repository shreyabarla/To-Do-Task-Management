import TaskItem from "./TaskItem";

function TaskList({
  tasks,
  removeTask,
  toggleComplete,
  }) {

  return (

    <div>

      <h2 style={{ marginBottom: "20px", color: "#1E293B" }}>
        My Tasks
      </h2>

      {tasks.map((task) => (
        <TaskItem
          key={task._id}
          task={task}
          removeTask={removeTask}
          toggleComplete={toggleComplete}
        />
      ))}

    </div>

  );
}

export default TaskList;