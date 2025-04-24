import pool from "../config/mysql";
import { Media } from "../models/mediaModel";

export class MediaService {
  async getAllMedia(): Promise<Media[]> {
    const [rows] = await pool.query("SELECT * FROM media");
    return rows as Media[];
  }

  async registerMedia(data: Omit<Media, "code">): Promise<void> {
    await pool.query("INSERT INTO media (fileName) VALUES (?)", [
      data.fileName,
    ]);
  }
}
