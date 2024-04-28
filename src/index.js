const express = require("express");
const config = require("./shared/config");
const apiRoutes = require("./api");
const db = require("./db");

const app = express();

process.on("unhandledRejection", (err) => {
  console.log("UnhandledRejection", err);
  process.exit(1);
});

app.use(express.json());
app.use(apiRoutes);

db.authenticate()
  .then(() => {
    console.log("Connected to DB successfully");

    app.listen(config.port, () => {
      console.log(`Server is listening on port ${config.port}`);
    });
  })
  .catch((err) => {
    console.log("Error connecting to DB", err);
  });
