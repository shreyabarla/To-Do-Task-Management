import { useState } from "react";
import { getTasks } from "../services/api";

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

  return {
    tasks,
    loading,
    error,
    fetchTasks,
  };
}

export default useTasks;