import pool from "../config/mysql";
import { AlertModel } from "../models/alertsModel";

export const getAlertsByCity = async (
  cityId: number
): Promise<AlertModel[]> => {
  const [rows] = await pool.query("SELECT * FROM Alert WHERE cityId = ?", [
    cityId,
  ]);
  return rows as AlertModel[];
};
