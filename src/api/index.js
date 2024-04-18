const express = require("express");
const exampleRouters = require("../modules/example/_routes");
const publisherRoutes = require("../modules/publishers/_routes");

const router = express.Router();

router.use(exampleRouters);
router.use(publisherRoutes);

module.exports = router;
