import express, { Request, Response } from "express"
const taskRoutes = express.Router()
taskRoutes

  .get('/', async (req: Request, res: Response) => {
    const Q = 'SELECT * FROM tasks';
    req.mysqlConnection.query(Q, [req.body.name], (err, results) => {
      if (err)
        console.log(err)
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