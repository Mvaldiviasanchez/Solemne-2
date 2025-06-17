const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root', // usa tu contraseña real
  database: 'plataforma_practicas'
});

connection.connect((err) => {
  if (err) {
    console.error('Error de conexión a MySQL:', err);
    return;
  }
  console.log('Conectado a MySQL');
});

module.exports = connection;