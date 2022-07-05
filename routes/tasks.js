const express = require('express')
const router = express.Router()
const {
  getAllTasks,
  createTasks,
  singleTasks,
  updateTask,
  deleteTask,
} = require('../controllers/tasks')

router.route('/').get(getAllTasks).post(createTasks)
router.route('/:id').get(singleTasks).patch(updateTask).delete(deleteTask)

module.exports = router
