import pool from "../config/mysql";
import { Video } from "../models/videoModel";

export class VideoService {
  async getVideosByMediaCode(mediaCode: number): Promise<Video[]> {
    const [rows] = await pool.query("SELECT * FROM video WHERE mediaCode = ?", [
      mediaCode,
    ]);
    return rows as Video[];
  }

  async registerVideo(data: Omit<Video, "id">): Promise<void> {
    await pool.query("INSERT INTO video (url, mediaCode) VALUES (?, ?)", [
      data.url,
      data.mediaCode,
    ]);
  }
}
