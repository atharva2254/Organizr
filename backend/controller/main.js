const Task = require("../model/tasks");

const getTask = async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.user._id });

    return res.status(200).json({ tasks, username: req.user.username });
  } catch (error) {
    return res.status(400).json({ message: "Server not responding" });
  }
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create({
      title: req.body.title,
      user: req.user._id,
    });

    return res.status(200).json({ message: "Task Added", task });
  } catch (error) {
    return res.status(400).json({ message: "Server not responding" });
  }
};

const updateTask = async (req, res) => {
  const { id } = req.params;
  const { completed } = req.body;
  try {
    const task = await Task.findOne({ _id: id, user: req.user.id });
    if (!task) {
      return res.status(404).json({ message: "Task not found!" });
    }

    task.completed = completed;
    await task.save();

    return res.status(200).json({ message: "Task updated!" });
  } catch (error) {
    return res.status(500).json({ message: "Server not responding" });
  }
};

const deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    await Task.findOneAndDelete({ _id: id, user: req.user.id });

    return res.status(200).json({ message: "Task deleted" });
  } catch (error) {
    return res.status(500).json({ message: "Server not responding!" });
  }
};

module.exports = { createTask, getTask, updateTask, deleteTask };
