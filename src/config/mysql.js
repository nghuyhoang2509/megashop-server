const { Sequelize } = require("sequelize");

const DB_HOST = process.env.DB_HOST || "localhost";
const DB_NAME = process.env.DB_NAME;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD || null;
const DB_DIALECT = process.env.DB_DIALECT || "mysql";

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
