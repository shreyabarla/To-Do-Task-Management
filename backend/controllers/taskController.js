const Task = require("../models/Task");

// Get all tasks
const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find().sort({ createdAt: -1 });

    res.status(200).json(tasks);
  } catch (error) {
    res.status(500);
    throw new Error("Unable to fetch tasks");
  }
};

// Create task
const createTask = async (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      res.status(400);
      throw new Error("Task title is required");
    }

    const task = await Task.create({
      title,
    });

    res.status(201).json(task);
  } catch (error) {
    res.status(500);
    throw error;
  }
};

// Update task
const updateTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      res.status(404);
      throw new Error("Task not found");
    }

    task.title = req.body.title ?? task.title;
    task.completed =
      req.body.completed ?? task.completed;

    const updatedTask = await task.save();

    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(500);
    throw error;
  }
};

// Delete task
const deleteTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      res.status(404);
      throw new Error("Task not found");
    }

    await task.deleteOne();

    res.status(200).json({
      message: "Task deleted successfully",
    });
  } catch (error) {
    res.status(500);
    throw error;
  }
};

module.exports = {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
};