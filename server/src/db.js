require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require("fs");
const path = require("path");
const { DB, DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DB_PORT, DB_URL } = process.env;

//° CONEXION A LA BASE DE DATOS


let sequelize;

if (process.env.NODE_ENV === "production") {
  sequelize = new Sequelize(DB_URL, {
    logging: false, // set to console.log to see the raw SQL queries
    native: false,
    dialectOptions: { ssl: { require: true } }, // lets Sequelize know we can use pg-native for ~30% more speed
  });
} else {
  sequelize = new Sequelize(
    `${DB}://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
    {
      logging: false, // set to console.log to see the raw SQL queries
      native: false, // lets Sequelize know we can use pg-native for ~30% more speed
    }
  );
}
/* sequelize = new Sequelize(DB_URL, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false,
  dialectOptions: { ssl: { require: true } }, // lets Sequelize know we can use pg-native for ~30% more speed
}); */

/*  const sequelize = new Sequelize(
    `${DB}://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`, 
    {
      logging: false, // set to console.log to see the raw SQL queries
      native: false, // lets Sequelize know we can use pg-native for ~30% more speed
      dialectOptions: { ssl: { require: true } },
    }
  ); */
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
// AQUI!
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);



// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring cambio

const { Administrator, MyDate, MyNotes, User, Workshops, Response } = sequelize.models;
// Definir el modelo CartProduct con el campo "cantidad"
// Aca vendrian las relaciones

User.belongsToMany(Workshops, {
  through: Response,
  foreignKey: "user_id",
  timestamps: false,
});
Workshops.belongsToMany(User, {
  through: Response,
  foreignKey: "workshop_id",
  timestamps: false,
});

/* User.hasMany(Response);
Response.belongsTo(User);

Workshops.hasMany(Response);
Response.belongsTo(Workshops); */
// relacion user-myDates (uno a muchos)
// User.hasMany(MyDate)
// MyDate.belongsTo(User)

//relacion de user-mynotes (uno a muchos)
/* User.hasMany(MyNotes);
MyNotes.belongsTo(User); */

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,
  // para importart la conexión { conn } = require('./db.js');
};
