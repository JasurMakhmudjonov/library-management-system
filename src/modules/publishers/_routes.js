const express = require("express");
const { postPublisher, getPublishers, getPublisher, patchPublisher, deletePublisher } = require("./_controllers");
const validate = require("../../shared/middlewares/validate");
const { getPublishersSchema, postPublisherSchema, patchPublisherSchema } = require("./_schemas");


const router = express.Router();

router.post("/publishers", validate(postPublisherSchema), postPublisher);
router.get("/publishers", validate(getPublishersSchema), getPublishers);
router.get("/publishers/:id", getPublisher);
router.patch("/publishers/:id",validate(patchPublisherSchema), patchPublisher);
router.delete("/publishers/:id", deletePublisher);

module.exports = router;
