import Header from "../components/Header";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

import { useState } from "react";

import "../styles/Home.css";

function Home() {

  const [tasks, setTasks] = useState([]);

  const addTask = (title) => {

    const newTask = {

      id: Date.now(),

      title,

      completed: false,

    };

    setTasks([...tasks, newTask]);

  };

  return (

    <div className="container">

      <Header />

      <TaskForm addTask={addTask} />

      <TaskList tasks={tasks} />

    </div>

  );

}

export default Home;