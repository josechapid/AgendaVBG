const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors= require("cors")
const routes = require('./routes/index.js');

require('./db.js');

const server = express();

server.name = 'API';

const corsOptions = { origin: "*" 
  /* origin: function (origin, callback) {
    
      callback(null, true);
    
  },
  credentials: true, // Permitir credenciales (cookies, encabezados de autenticación) */
};

server.use(cors(corsOptions));


server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));

const allowedOrigins = [
  "http://localhost:5173",
  "http://127.0.0.1:5173",
  "http://localhost:19006", // Añadir este origen
  "http://localhost:3001",
  "http://192.168.0.93:8081",
  "http://8.242.185.5:8081",
  "http://localhost:8081",
  "http://192.168.1.17:3001",
  "http://192.168.1.21",
];

server.use((req, res, next) => {
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.header("Access-Control-Allow-Origin", origin);
  }
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, DELETE, PATCH"
  );
  next();
});

server.use('/', routes);

// Error catching endware.
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;

