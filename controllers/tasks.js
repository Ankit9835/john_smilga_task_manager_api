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
    if (!task) {
      return res.status(404).json({ msg: `no task with id : ${taskId}` })
    }
    res.status(200).json({ task })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}

const updateTask = async (req, res) => {
  try {
    const { id: taskID } = req.params
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
    })
    if (!task) {
      return res
        .status(402)
        .json({ msg: `task not found for the given ${taskID}` })
    }
    res.status(201).json({ task })
  } catch (error) {
    return res.status(500).json({ msg: error })
  }
}

const deleteTask = async (req, res) => {
  try {
    const { id: taskID } = req.params
    const remove = await Task.findOneAndDelete({ _id: taskID })
    if (!remove) {
      return res
        .status(402)
        .json({ msg: `Data not found for the given id : ${taskID}` })
    }
    res
      .status(201)
      .json({ msg: `data deleted successfully`, status: true, data: remove })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}

module.exports = {
  getAllTasks,
  createTasks,
  singleTasks,
  updateTask,
  deleteTask,
}
