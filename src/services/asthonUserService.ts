import pool from "../config/mysql";

export class AsthonUserService {
  async deleteOccurrence(id: number): Promise<void> {
    await pool.query("DELETE FROM occurrence WHERE id = ?", [id]);
  }

  async deleteUser(email: string): Promise<void> {
    await pool.query("DELETE FROM user WHERE email = ?", [email]);
  }
}
