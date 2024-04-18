const express = require("express");
const config = require("./shared/config");
const apiRoutes = require("./api");
const db = require("./db");

const app = express();

app.use(apiRoutes);
app.use(express.json());

db.sync({ force: true, logging: false})
  .then(() => {
    console.log("Connected to DB successfully");

    app.listen(config.port, () => {
      console.log(`Server is listening on port ${config.port}`);
    });
  })
  .catch((err) => {
    console.log("Error connecting to DB", err);
  });
