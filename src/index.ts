import "dotenv/config";
import express from "express";
import morgan from "morgan";
import cors from "cors";

import routes from "./routes";

const app = express();
const port = process.env.PORT || 3000; // Puerto en el que se ejecutará tu servidor

app.use(express.json()); // Permite el uso de JSON en las solicitudes HTTP
app.use(express.urlencoded({ extended: false })); // Permite el uso de formularios HTML en las solicitudes HTTP

// Configurar middleware
app.use(morgan("dev")); // Morgan para registrar solicitudes en la consola (puedes personalizar el formato)
app.use(cors()); // Cors para permitir solicitudes desde cualquier origen (configura según tus necesidades)

app.use("/", routes);

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor Express en ejecución en el puerto ${port}`);
});
