const https = require("https");
const { readFileSync } = require("fs");
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();
const Route = require("./router/index.router.js");
const connectMySQL = require("./config/mysql.js");

connectMySQL();

const app = express();
const CLIENT_HOST = process.env.CLIENT_HOST || "localhost";
app.use(
  //here i am using cors
  cors({
    origin: CLIENT_HOST,
    credentials: true,
    exposedHeaders: ["set-cookie"],
  })
);
app.use(cookieParser(process.env.secretCookie));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json({ limit: "50mb", extended: true }));

Route(app);

const port = process.env.PORT || 3000;

const options = {
  key: readFileSync("./SSL/localhost+4-key.pem"),
  cert: readFileSync("./SSL/localhost+4.pem"),
};

const server = https.createServer(options, app);

server.listen(port, () => {
  console.log(`Server run in https://localhost:${port}`);
});
