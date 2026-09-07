import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import EmptyState from "../components/EmptyState";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";

import useTasks from "../hooks/useTasks";
import "../styles/Home.css";

function Home() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const {
    tasks,
    loading,
    error,
    fetchTasks,
    addTask,
    removeTask,
    toggleComplete,
    editTask,
  } = useTasks();

  useEffect(() => {
    fetchTasks();
  }, []);

  const filteredTasks = tasks
  .filter((task) =>
    task.title.toLowerCase().includes(search.toLowerCase())
  )
  .filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true;
  });

  return (
    <>
      <Navbar />

      <main className="home">
        <>
          <h2>Task Dashboard</h2>
          <p className="subtitle">
            Manage your daily work with priorities and deadlines.
          </p>
        </>
        <TaskForm addTask={addTask} />

        <SearchBar search={search} setSearch={setSearch} />
        <FilterBar filter={filter} setFilter={setFilter} />

        {loading && <Loading />}

        {error && <ErrorMessage message={error} />}

        {!loading && !error && tasks.length === 0 ? (
          <EmptyState />
        ) : (
          <>

            <TaskList
              tasks={filteredTasks}
              removeTask={removeTask}
              toggleComplete={toggleComplete}
              editTask={editTask}
            />
          </>
        )}
      </main>
    </>
  );
}

export default Home;