import express from "express"
import { createTask, deleteTask, getTask, getTasks, getTasksByCategoryAndPriority, updateTask } from "../controllers/taskController.js"
const router = express.Router()

router.get('/', getTasks)
router.get('/:id', getTask)
router.get('/filteredTasks', getTasksByCategoryAndPriority)
router.post('/', createTask)
router.delete('/:id', deleteTask)
router.patch('/', updateTask)

export default router