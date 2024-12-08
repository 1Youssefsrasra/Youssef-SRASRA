import express from "express"
import { createCategory, deleteCategory, getCategory } from "../controllers/categoryController.js"
const router = express.Router()

router.get('/', getCategory)
router.post('/', createCategory)
router.delete('/:id', deleteCategory)


export default router