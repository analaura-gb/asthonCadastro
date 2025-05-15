import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import alertsRoutes from "./routes/alertsRoutes";
import commonUserRoutes from "./routes/commonUserRoutes";
import asthonUserRoutes from "./routes/asthonUserRoutes";
import userRoutes from "./routes/userRoutes";
import cityRoutes from "./routes/cityRoutes";
import mediaRoutes from "./routes/mediaRoutes";
import occurrenceRoutes from "./routes/occurrenceRoutes";
import pictureRoutes from "./routes/pictureRoutes";
import videoRoutes from "./routes/videoRoutes";

dotenv.config();

const app = express();
const port = process.env.PORTAPI;

app.use(cors());
app.use(express.json());

app.use("/alerts", alertsRoutes);
app.use("/common", commonUserRoutes);
app.use("/asthon", asthonUserRoutes);
app.use("/user", userRoutes);
app.use("/city", cityRoutes);
app.use("/media", mediaRoutes);
app.use("/occurrence", occurrenceRoutes);
app.use("/picture", pictureRoutes);
app.use("/video", videoRoutes);

app.get("/", (req, res) => {
  res.send("API rodando com sucesso");
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
