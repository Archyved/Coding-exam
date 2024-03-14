import express from 'express';
import { Request, Response } from 'express';
import taskRoutes from './routes/task'
import Database from '../model/index'
import bodyParser from 'body-parser'
import cors from 'cors'
const app = express();
const port = 8081;

app.use(cors({ origin: ["http://localhost:8080"] }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(Database);
app.get('/', async (req: Request, res: Response) => {
  res.send('Application Started');
})
  .use('/task', taskRoutes)
app.listen(port, () => {
  console.log('Application started at ' + port + "!");
});