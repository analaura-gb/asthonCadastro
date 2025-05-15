import pool from "../config/mysql";
import { MediaModel, Type, Resolution } from "../models/mediaModel";
import { ResultSetHeader } from "mysql2";

export const getMediaByOccurrence = async (
  occurrenceId: number
): Promise<MediaModel[]> => {
  const [rows] = await pool.query(
    "SELECT * FROM Media WHERE OccurrenceId = ?",
    [occurrenceId]
  );
  return rows as MediaModel[];
};

export const postMedia = async (
  data: Omit<MediaModel, "id">
): Promise<MediaModel> => {
  const { fileName, type, duration, resolution, occurrenceId } = data;
  const [result] = await pool.query(
    "INSERT INTO Media (fileName, type, duration, width, height, occurrenceId) VALUES (?, ?, ?, ?, ?, ?)",
    [
      fileName,
      Type[type],
      duration,
      resolution.width,
      resolution.height,
      occurrenceId,
    ]
  );

  const insertResult = result as ResultSetHeader;
  return {
    id: insertResult.insertId,
    fileName,
    type,
    duration,
    resolution,
    occurrenceId,
  };
};

export const deleteMedia = async (occurrenceId: number): Promise<boolean> => {
  const [result] = await pool.query<ResultSetHeader>(
    "DELETE FROM Media WHERE occurrenceId = ?",
    [occurrenceId]
  );

  console.log(result);
  return result.affectedRows > 0;
};

export const getResolution = async (id: number): Promise<Resolution> => {
  const [rows] = await pool.query(
    "SELECT width, height FROM  Media WHERE id = ?",
    [id]
  );
  return (rows as Resolution[])[0];
};

export const getDuration = async (
  id: number
): Promise<{ duration: number }> => {
  const [rows] = await pool.query("SELECT duration FROM  Media WHERE id = ?", [
    id,
  ]);
  return (rows as { duration: number }[])[0];
};
