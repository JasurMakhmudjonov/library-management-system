const express = require("express");
const config = require("./shared/config");
const apiRoutes = require("./api")

const app = express();

app.use(apiRoutes);

app.listen(config.port, () => {
  console.log(`Server is listening on port ${config.port}`);
});
