import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";

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

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Cadastro API",
      version: "1.0.0",
      description: "API para gerenciar dados no cenário",
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ["./src/schemas/*.ts"],
};
const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

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
