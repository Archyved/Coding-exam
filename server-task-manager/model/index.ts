import { Request, Response, NextFunction } from 'express';
import mysql from 'mysql2'
import { Connection } from 'mysql2/typings/mysql/lib/Connection';

declare module 'express-serve-static-core' {
  interface Request {
    mysqlConnection: Connection;
  }
}
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'developer',
  database: 'task_manager'
});
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database!');
});

const Database = (req: Request, _: Response, next: NextFunction) => {
  req.mysqlConnection = connection as unknown as Connection;;
  next();
};


export default Database;
