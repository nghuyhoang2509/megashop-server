const { Sequelize } = require("sequelize");
require("dotenv").config();

/* const DB_HOST = process.env.DB_HOST || "localhost";
const DB_NAME = process.env.DB_NAME;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD || null;
const DB_DIALECT = process.env.DB_DIALECT || "mysql"; */

const DB_HOST = "b0rsi0pgbt8vsjmmig2o-mysql.services.clever-cloud.com";
const DB_NAME = "b0rsi0pgbt8vsjmmig2o";
const DB_USER = "u3a36ngrfaquf8cw";
const DB_PASSWORD = "mIHxgs5HQPw7Mvew7W53";
const DB_DIALECT = "mysql";

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: DB_DIALECT,
  logging: false,
});

exports.sequelize = sequelize;

module.exports = async function connectMySQL() {
  try {
    await sequelize.authenticate();
    console.log("Connect MySql success");
    return sequelize;
  } catch (error) {
    console.log(error);
  }
};
