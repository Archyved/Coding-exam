import express, { Request, Response } from "express"
const taskRoutes = express.Router()
taskRoutes.get('/', async (req: Request, res: Response) => {
  res.send('Get Tasks')
})


export default taskRoutes