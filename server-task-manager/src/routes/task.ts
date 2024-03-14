import express, { Request, Response } from "express"
const taskRoutes = express.Router()
taskRoutes

  .get('/', async (req: Request, res: Response) => {
    console.log("RETRIEVING TASKS")
    const Q = 'SELECT * FROM tasks';
    req.mysqlConnection.query(Q, [req.body.name], (err, results) => {
      if (err)
        res.status(500).send("Unknown Error Occurred")
      res.send({ data: results, error: null })
    })
  })
  .post('/', async (req: Request, res: Response) => {
    const Q = 'INSERT INTO tasks (name) VALUES (?)';
    req.mysqlConnection.query(Q, [req.body.name], (err, results) => {
      if (err)
        console.log(err)
      console.log(results)
    })
    res.send({ error: null })
  })

export default taskRoutes