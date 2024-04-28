const express = require("express");
const {
  postPublisher,
  getPublishers,
  getPublisher,
  patchPublisher,
  deletePublisher,
} = require("./_controllers");
const validate = require("../../shared/middlewares/validate");
const {
  getPublishersSchema,
  postPublisherSchema,
  patchPublisherSchema,
} = require("./_schemas");
const isLoggedIn = require("../../shared/middlewares/is-logged-in");
const hasRole = require("../../shared/middlewares/has-role");

const router = express.Router();

router.post(
  "/publishers",
  isLoggedIn,
  hasRole("admin", "superadmin"),

  validate(postPublisherSchema),
  postPublisher
);
router.get(
  "/publishers",
  isLoggedIn,
  hasRole("admin", "superadmin"),
  validate(getPublishersSchema),
  getPublishers
);
router.get("/publishers/:id", getPublisher);
router.patch(
  "/publishers/:id",
  isLoggedIn,
  hasRole("admin", "superadmin"),
  validate(patchPublisherSchema),
  patchPublisher
);
router.delete("/publishers/:id", isLoggedIn, hasRole("admin", "superadmin"), deletePublisher);

module.exports = router;
