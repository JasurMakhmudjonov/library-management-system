const express = require("express");
const { postPublisher } = require("./_controllers");

const router = express.Router();

router.post("/publishers", postPublisher);
router.get("/publishers");
router.get("/publishers/:id");
router.patch("/publishers/:id");
router.delete("/publishers/:id");

module.exports = router;
