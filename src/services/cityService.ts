import { CityModel } from "../models/cityModel";
import pool from "../config/mysql";

export const getCities = async (): Promise<CityModel[]> => {
  const [rows] = await pool.query("SELECT * FROM City");
  return rows as CityModel[];
};
