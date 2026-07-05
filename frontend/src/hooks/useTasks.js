import { useState } from "react";
import {
  getTasks,
  createTask,
  deleteTask,
  updateTask,
} from "../services/api";

function useTasks() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchTasks = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await getTasks();

      setTasks(response.data);
    } catch (err) {
      console.error(err);

      setError("Unable to fetch tasks.");
    } finally {
      setLoading(false);
    }
  };

  const addTask = async (title) => {
  try {
    await createTask({
      title,
    });

    await fetchTasks();
  } catch (err) {
    console.error(err);
    setError("Unable to add task.");
  }
};

const removeTask = async (id) => {
  try {
    await deleteTask(id);

    await fetchTasks();
  } catch (err) {
    console.error(err);
    setError("Unable to delete task.");
  }
};

const toggleComplete = async (task) => {
  try {
    await updateTask(task._id, {
      completed: !task.completed,
    });

    await fetchTasks();
  } catch (err) {
    console.error(err);
    setError("Unable to update task.");
  }
};

  return {
    tasks,
    loading,
    error,
    addTask,
    removeTask,
    toggleComplete,
    fetchTasks,
  };
}

export default useTasks;