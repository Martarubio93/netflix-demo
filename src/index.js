// Fichero src/index.js

// Importamos los dos módulos de NPM necesarios para trabajar
const express = require("express");
const cors = require("cors");
const Database = require('better-sqlite3')


// Create server
const server = express();

// Config server
server.use(cors());
server.use(express.json());

// run server 3000 port 
const serverPort = 3000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

const db = new Database('./src/database.db', {
  verbose: console.log
})


//endpoint login

server.post('/login', (req, res) => {
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

//endpoint singUp

server.post("/signup", (req, res)=> {
  console.log('peticion a la ruta')
  const email = req.body.email;
  const password = req.body.password;
  const selectUser = db.prepare('SELECT * FROM users WHERE email = ?')
  const foundUser = selectUser.get(email);

  if (foundUser === undefined){
    const query = db.prepare(
      "INSERT INTO users (email, password) VALUES (?, ?)"
    )
    const addUser = query.run(email, password);
    res.json({
      success:true,
      userId: addUser.lastInsertRowid,
    });

  }else {
    res.json({
      success: false,
      message: "The user already exists "
    })
  }
})
//config static server

const staticServerPath = "./src/public-react";
server.use(express.static(staticServerPath));