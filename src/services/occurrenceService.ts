import pool from "../config/mysql";
import { Occurrence } from "../models/occurrenceModel";

export class OccurrenceService {
  async getOccurrences(): Promise<Occurrence[]> {
    const [rows] = await pool.query("SELECT * FROM occurrence");
    return rows as Occurrence[];
  }

  async getOccurrenceById(id: number): Promise<Occurrence | null> {
    const [rows]: any = await pool.query(
      "SELECT * FROM occurrence WHERE id = ?",
      [id]
    );
    return rows[0] || null;
  }

  async registerOccurrence(data: Omit<Occurrence, "id">): Promise<void> {
    await pool.query(
      "INSERT INTO occurrence (description, city, date, status) VALUES (?, ?, ?, ?)",
      [data.description, data.city, data.date, data.status]
    );
  }
}
