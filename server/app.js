import express from "express";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
console.log(__filename);
const __dirname = path.dirname(__filename);

const app = express();
const publicFolderPath = path.join(__dirname, "../public"); // Retrocedemos un directorio para acceder a "public"

console.log(publicFolderPath)

app.use(express.static(publicFolderPath));

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(3000, () => {
  console.log("Servidor iniciado en el puerto 3000");
});
