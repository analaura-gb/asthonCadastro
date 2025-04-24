import pool from "../config/mysql";
import { Picture } from "../models/pictureModel";

export class PictureService {
  async getPicturesByMediaCode(mediaCode: number): Promise<Picture[]> {
    const [rows] = await pool.query(
      "SELECT * FROM picture WHERE mediaCode = ?",
      [mediaCode]
    );
    return rows as Picture[];
  }

  async registerPicture(data: Omit<Picture, "id">): Promise<void> {
    await pool.query("INSERT INTO picture (url, mediaCode) VALUES (?, ?)", [
      data.url,
      data.mediaCode,
    ]);
  }
}
