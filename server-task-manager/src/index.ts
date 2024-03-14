import express from 'express';
import { Request, Response } from 'express';
const app = express();
const port = 8081;

app.get('/', async (req: Request, res: Response) => {
  res.send('Application Started');
})

app.listen(port, () => {
  console.log('Application started at ' + port + "!");
});