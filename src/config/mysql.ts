import mysql, { Pool } from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const pool: Pool = mysql.createPool({
  host: process.env.HOST,
  user: process.env.DBUSER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  port: Number(process.env.PORTDB),
  waitForConnections: true,
  connectionLimit: 100,
  queueLimit: 0,
});

export default pool;
