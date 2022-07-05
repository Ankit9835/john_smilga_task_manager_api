const Task = require('../models/Task')

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({})
    res.status(201).json({ tasks })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}

const createTasks = async (req, res) => {
  try {
    const task = await Task.create(req.body)
    res.status(201).json({ task })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}

const singleTasks = async (req, res) => {
  try {
    const { id: taskId } = req.params
    const task = await Task.findOne({ _id: taskId })
    res.status(200).json({ task })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}

const updateTask = (req, res) => {
  res.send('update task')
}

const deleteTask = (req, res) => {
  res.send('delete task')
}

module.exports = {
  getAllTasks,
  createTasks,
  singleTasks,
  updateTask,
  deleteTask,
}
