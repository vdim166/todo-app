import { Request, Response } from "express"

class TaskController {
  async createTask(req: Request, res: Response) {}
  async getTasks(req: Request, res: Response) {}
  async getTaskById(req: Request, res: Response) {}
  async updateTask(req: Request, res: Response) {}
  async deleteTask(req: Request, res: Response) {}
}

const taskController = new TaskController()
export default taskController
