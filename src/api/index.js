const express = require("express");
const exampleRouters = require("../modules/example/_routes");
const publisherRoutes = require("../modules/publishers/_routes");
const userRoutes = require("../modules/users/_routes");

const router = express.Router();

router.use(exampleRouters);
router.use(publisherRoutes);
router.use(userRoutes);

module.exports = router;
