import pool from "../config/mysql";
import { User } from "../models/userModel";

export class UserService {
  async getUserByEmail(email: string): Promise<User | null> {
    const [rows]: any = await pool.query("SELECT * FROM user WHERE email = ?", [
      email,
    ]);
    return rows.length > 0 ? rows[0] : null;
  }

  async registerUser(data: Omit<User, "id">): Promise<void> {
    await pool.query(
      "INSERT INTO user (name, email, password) VALUES (?, ?, ?)",
      [data.name, data.email, data.password]
    );
  }
}
