// Fichero src/index.js

// Importamos los dos módulos de NPM necesarios para trabajar
const express = require("express");
const cors = require("cors");
const Database = require('better-sqlite3')


// Creamos el servidor
const server = express();

// Configuramos el servidor
server.use(cors());
server.use(express.json());

// Arrancamos el servidor en el puerto 3000
const serverPort = 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

const db = new Database('./src/database.db', {
  verbose: console.log
})


server.post('/login', (req, res) => {
  console.log(req.body)
  const loginEmail = req.body.email;
  const loginPassword = req.body.password;
  const query = db.prepare(
    `SELECT id FROM users WHERE email = ? AND password = ?`
  )
  const userId = query.get(loginEmail, loginPassword)
  userId ? res.json({
    success: true,
    userId: userId.id
  })
  : res.json({
    success: false,
  errorMessage: 'Sorry, your email or password are not correct'  })
})
