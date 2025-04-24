import pool from "../config/mysql";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../models/userModel";

const JWT_SECRET = process.env.JWT_SECRET || "secret"; // idealmente em .env

export class CommonUserService {
  async register(name: string, email: string, password: string): Promise<User> {
    const hashedPassword = await bcrypt.hash(password, 10);

    await pool.query(
      "INSERT INTO user (name, email, password) VALUES (?, ?, ?)",
      [name, email, hashedPassword]
    );

    const [rows]: any = await pool.query("SELECT * FROM user WHERE email = ?", [
      email,
    ]);

    return rows[0];
  }

  async login(email: string, password: string): Promise<string> {
    const [rows]: any = await pool.query("SELECT * FROM user WHERE email = ?", [
      email,
    ]);

    const user = rows[0];
    if (!user) throw new Error("Usuário não encontrado");

    const match = await bcrypt.compare(password, user.password);
    if (!match) throw new Error("Senha inválida");

    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
      expiresIn: "2h",
    });

    return token;
  }
}
