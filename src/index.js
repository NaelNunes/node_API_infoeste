import express from "express";
import usuarioRoute from "./routes/usuario.route.js";

const app = express();
app.use(express.json());

app.use("/usuario", usuarioRoute);

app.listen(5000, () => {
  console.log("Servidor rodando em http://localhost:5000");
});
