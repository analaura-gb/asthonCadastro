import pool from "../config/mysql";
import { OccurrenceModel } from "../models/occurrenceModel";
import { ResultSetHeader } from "mysql2";

export const getOccurrences = async (): Promise<OccurrenceModel[]> => {
  const [rows] = await pool.query("SELECT * FROM Occurrence");
  return rows as OccurrenceModel[];
};

export const getOccurrenceById = async (
  id: number
): Promise<OccurrenceModel[] | null> => {
  const [rows]: any = await pool.query(
    "SELECT * FROM Occurrence WHERE id = ?",
    [id]
  );

  if (rows.length === 0) {
    return null;
  }

  return rows as OccurrenceModel[];
};

export const postOccurrence = async (
  data: Omit<OccurrenceModel, "id">
): Promise<OccurrenceModel> => {
  const { description, cityId, date } = data;
  const [result] = await pool.query(
    "INSERT INTO Occurrence (description, cityId, date) VALUES (?, ?, ?)",
    [description, cityId, date]
  );

  const insertResult = result as ResultSetHeader;
  return {
    id: insertResult.insertId,
    description,
    cityId,
    date,
  };
};

export const deleteOccurrence = async (id: number): Promise<boolean> => {
  const [result] = await pool.query<ResultSetHeader>(
    "DELETE FROM Occurrence WHERE id = ?",
    [id]
  );

  console.log(result);
  return result.affectedRows > 0;
};
