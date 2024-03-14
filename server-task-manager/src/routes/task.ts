import express, { Request, Response } from "express"
const taskRoutes = express.Router()
taskRoutes

  .get('/', async (req: Request, res: Response) => {
    console.log("RETRIEVING TASKS")
    const Q = 'SELECT * FROM tasks';
    req.mysqlConnection.query(Q, [req.body.title], (err, results) => {
      if (err) {
        res.status(500).send("Unknown Error Occurred")
        return
      }
      res.send({ data: results, error: null })
    })
  })
  .post('/', async (req: Request, res: Response) => {
    console.log("ADDING TASKS")
    const Q = 'INSERT INTO tasks (title) VALUES (?)';

    if (!req.body.title) {
      res.send({ data: null, error: 'Task Title is required' })
      return
    }

    req.mysqlConnection.query(Q, [req.body.title], (err, results) => {
      if (err) {
        res.status(500).send("Unknown Error Occurred")
        return
      }
      res.send({ data: null, error: null })
    })
  })
  .delete('/:task_id', (req: Request, res: Response) => {
    console.log("DELETING TASK")
    if (req.params.task_id == undefined) {
      res.send({ data: null, error: 'Task ID is required' })
      return
    }
    const Q = 'DELETE FROM tasks WHERE id = ?';
    req.mysqlConnection.query(Q, [req.params.task_id], (err, results) => {
      if (err) {
        res.status(500).send("Unknown Error Occurred")
        return
      }
      res.send({ data: null, error: null })
    })
  })
  .put('/:task_id', (req: Request, res: Response) => {
    console.log("UPDATING TASK")
    const taskID = req.params.task_id;
    const status = req.body.statusCompleted
    if (!taskID) {
      res.status(400).send({ data: null, error: 'Task ID is required' });
      return;
    }
    const Q = 'UPDATE tasks SET statusCompleted = ? WHERE id = ?';
    req.mysqlConnection.query(Q, [status, taskID], (err, results) => {
      if (err) {
        res.status(500).send({ data: null, error: "Unknown Error Occurred" });
        return;
      }
      res.send({ data: null, error: null });
    });
  });

export default taskRoutes