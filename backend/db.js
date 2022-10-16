// const { Client } = require("pg");

// const client = new Client({
//   host: "localhost",
//   port: 5432,
//   user: "db_user",
//   password: "dbPass",
//   database: "project",
// });

// client.on("connect", () => {
//   console.log("Database connected");
// });

// client.on("end", () => {
//   console.log("Database disconnected");
// });

// module.exports = client;

const { Sequelize } = require("sequelize");

const db = new Sequelize("project", "db_user", "dbPass", {
  host: "localhost",
  dialect: "postgres",
});

module.exports = db;
