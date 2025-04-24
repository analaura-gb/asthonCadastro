import pool from "../config/mysql";
import { Alert } from "../models/alertsSentModel";

export class AlertsSentService {
  async getSentAlertsByClientID(clientID: string): Promise<Alert[]> {
    const [rows] = await pool.query(
      "SELECT * FROM alertsSent WHERE clientID = ?",
      [clientID]
    );
    return rows as Alert[];
  }
}
