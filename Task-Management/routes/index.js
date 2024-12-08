import express from "express"
import taskRouter from "./task.js"
import categoryRouter from './category.js'

const router = express.Router()




router.use('/category', categoryRouter);
router.use('/task', taskRouter);

export default router