import { City } from "../models/citiesModel";
import pool from "../config/mysql";

export class CitiesService {
  async getCities(): Promise<City[]> {
    const [rows] = await pool.query("SELECT * FROM cities");
    return rows as City[];
  }

  async getClientIDByCity(city: string): Promise<{ clientID: string | null }> {
    const [rows]: any = await pool.query(
      "SELECT clientID FROM clients WHERE city = ?",
      [city]
    );

    if (rows.length > 0) {
      return { clientID: rows[0].clientID };
    }

    return { clientID: null };
  }
}
