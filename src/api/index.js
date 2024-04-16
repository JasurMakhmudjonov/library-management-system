const express = require("express");
const exampleRouters = require("../modules/example/_routes");

const router = express.Router();

router.use(exampleRouters);

module.exports = router;
