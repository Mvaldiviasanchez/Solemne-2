const express = require("express");
const cors = require("cors");
const connection = require("./database");

const app = express(); // ← DEFINE app AQUÍ

const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.post("/api/registro", (req, res) => {
  const { nombre, usuario, password, telefono, email } = req.body;

  if (!nombre || !usuario || !password || !telefono || !email) {
    return res.status(400).json({ message: "Faltan datos obligatorios" });
  }

  const sql = "INSERT INTO usuarios (nombre, usuario, password, telefono, email) VALUES (?, ?, ?, ?, ?)";
  connection.query(sql, [nombre, usuario, password, telefono, email], (err, result) => {
    if (err) {
      console.error("Error al insertar en la base de datos:", err);
      return res.status(500).json({ message: "Error interno del servidor" });
    }

    res.status(200).json({ message: "Registrado correctamente" });
  });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});