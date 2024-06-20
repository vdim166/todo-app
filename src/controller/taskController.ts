import { Request, Response } from "express"
import Task from "../models/task"

class TaskController {
  async createTask(req: Request, res: Response) {
    const { title, description, status } = req.body
    try {
      const task = await Task.create({ title, description, status })
      res.status(201).json(task)
    } catch (error) {
      res.status(500).json({ error: "Failed to create task" })
    }
  }
  async getTasks(req: Request, res: Response) {
    try {
      const tasks = await Task.findAll()
      res.status(200).json(tasks)
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch tasks" })
    }
  }
  async getTaskById(req: Request, res: Response) {
    const { id } = req.params
    try {
      const task = await Task.findByPk(id)
      if (task) {
        res.status(200).json(task)
      } else {
        res.status(404).json({ error: "Task not found" })
      }
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch task" })
    }
  }
  async updateTask(req: Request, res: Response) {
    const { id } = req.params
    const { title, description, status } = req.body
    try {
      const task = await Task.findByPk(id)
      if (task) {
        await task.update({ title, description, status })
        res.status(200).json(task)
      } else {
        res.status(404).json({ error: "Task not found" })
      }
    } catch (error) {
      res.status(500).json({ error: "Failed to update task" })
    }
  }
  async deleteTask(req: Request, res: Response) {
    const { id } = req.params
    try {
      const task = await Task.findByPk(id)
      if (task) {
        await task.destroy()
        res.status(200).json({ status: "Task deleted" })
      } else {
        res.status(404).json({ error: "Task not found" })
      }
    } catch (error) {
      res.status(500).json({ error: "Failed to delete task" })
    }
  }
}

const taskController = new TaskController()
export default taskController
