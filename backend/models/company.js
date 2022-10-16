const db = require("../db");
const Sequelize = require("sequelize");

const Company = db.define("company", {
  name: {
    type: Sequelize.STRING,
  },
  cinNumber: {
    type: Sequelize.STRING,
  },
  address: {
    type: Sequelize.STRING,
  },
});

Company.sync().then(() => {
  console.log("Table Created");
});

module.exports = Company;
