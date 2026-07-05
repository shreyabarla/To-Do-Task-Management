import { useEffect } from "react";

import Navbar from "../components/Navbar";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import EmptyState from "../components/EmptyState";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

import useTasks from "../hooks/useTasks";
import "../styles/Home.css";

function Home() {
  const {
    tasks,
    loading,
    error,
    fetchTasks,
  } = useTasks();

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <>
      <Navbar />

      <main className="home">
        <h2>Welcome to Smart To-Do Manager</h2>

        <TaskForm />

        {loading && <Loading />}

        {error && <ErrorMessage message={error} />}

        {!loading && !error && tasks.length === 0 ? (
          <EmptyState />
        ) : (
          <TaskList tasks={tasks} />
        )}
      </main>
    </>
  );
}

export default Home;