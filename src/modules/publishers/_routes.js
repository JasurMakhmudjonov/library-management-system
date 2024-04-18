const express = require("express");
const { postPublisher, getPublishers, getPublisher } = require("./_controllers");
const validate = require("../../shared/middlewares/validate");
const { getPublishersSchema } = require("./_schemas");

const router = express.Router();

router.post("/publishers", postPublisher);
router.get("/publishers", validate(getPublishersSchema), getPublishers);
router.get("/publishers/:id", getPublisher);
router.patch("/publishers/:id");
router.delete("/publishers/:id");

module.exports = router;
