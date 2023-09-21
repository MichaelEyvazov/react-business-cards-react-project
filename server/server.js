const config = require("config");
const express = require("express");
const { handleError } = require("./utils/handleErrors");
const logger = require("./logger/loggerService");
const router = require("./router/router");
const chalk = require("chalk");
const cors = require("./middlewares/cors");
const connectToDb = require("./DB/ServiceDB");
const app = express();
const {
  generateFirstUsers,
  generateFirstCards,
} = require("./firstGenerateData/generateFirstDataService");

app.use(cors);
app.use(logger);
app.use(express.json());
app.use(express.static("./public"));
app.use(router);

app.use((err, req, res, next) => {
  handleError(res, 500, err.message);
});

const PORT = config.get("PORT");

app.listen(PORT, () => {
  console.log(chalk.blueBright(`Listening on: http://localhost:${PORT}`));
  connectToDb();
  generateFirstUsers();
  generateFirstCards();
});
