import pool from "../config/mysql";
import { UserModel, Role } from "../models/userModel";
import { ResultSetHeader } from "mysql2";

export const postUser = async (
  data: Omit<UserModel, "id">
): Promise<UserModel> => {
  const { name, email, password, role } = data;

  const [result] = await pool.query(
    "INSERT INTO User (name, email, password, role) VALUES (?, ?, ?, ?)",
    [name, email, password, Role[role]]
  );

  const insertResult = result as ResultSetHeader;
  return {
    id: insertResult.insertId,
    name,
    email,
    password,
    role,
  };
};

export const getProfile = async (email: string): Promise<UserModel> => {
  const [rows] = await pool.query("SELECT * FROM User WHERE email = ?", [
    email,
  ]);

  return (rows as UserModel[])[0];
};

export const deleteUser = async (email: string): Promise<boolean> => {
  const [result] = await pool.query<ResultSetHeader>(
    "DELETE FROM User WHERE email = ?",
    [email]
  );

  return result.affectedRows > 0;
};
