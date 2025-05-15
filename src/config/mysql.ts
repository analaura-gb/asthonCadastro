import mysql, { Pool } from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const pool: Pool = mysql.createPool({
  host: process.env.HOSTDB,
  user: process.env.USERDB,
  password: process.env.PASSWORDDB,
  database: process.env.DATABASEDB,
  port: Number(process.env.PORTDB),
  waitForConnections: true,
  connectionLimit: 100,
  queueLimit: 0,
});

export default pool;
