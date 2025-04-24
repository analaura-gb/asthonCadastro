import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import commonUserRoutes from "./routes/commonUserRoutes";
import asthonUserRoutes from "./routes/asthonUserRoutes";
import userRoutes from "./routes/userRoutes";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Rotas
app.use("/common", commonUserRoutes);
app.use("/asthon", asthonUserRoutes);
app.use("/user", userRoutes);

// Rota raiz
app.get("/", (req, res) => {
  res.send("API rodando com sucesso");
});

// Inicialização do servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
