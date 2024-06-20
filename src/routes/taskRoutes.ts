import { Router } from "express"
import taskController from "../controller/taskController"

const router = Router()

router.post("/tasks", taskController.createTask)
router.get("/tasks", taskController.getTasks)
router.get("/tasks/:id", taskController.getTaskById)
router.put("/tasks/:id", taskController.updateTask)
router.delete("/tasks/:id", taskController.deleteTask)

export default router
