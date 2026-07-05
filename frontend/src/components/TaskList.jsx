import TaskItem from "./TaskItem";

function TaskList({ tasks }) {

  return (

    <div>

      <h2 style={{ marginBottom: "20px", color: "#1E293B" }}>
        My Tasks
      </h2>

      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
        />
      ))}

    </div>

  );
}

export default TaskList;