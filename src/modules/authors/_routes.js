const express = require("express");
const {
  postAuthor,
  getAuthors,
  getAuthor,
  patchAuthor,
  deleteAuhor,
} = require("./_controllers");
const validate = require("../../shared/middlewares/validate");
const {
  getAuthorsSchema,
  postAuthorSchema,
  patchAuthorSchema,
} = require("./_schemas");
const  isLoggedIn  = require("../../shared/middlewares/is-logged-in");
const  hasRole  = require("../../shared/middlewares/has-role");


const router = express.Router();

router.post(
  "/authors",
  isLoggedIn,
  hasRole("admin", "superadmin"),
  validate(postAuthorSchema),
  postAuthor
);
router.get(
  "/authors",
  isLoggedIn,
  hasRole("admin", "superadmin"),
  validate(getAuthorsSchema),
  getAuthors
);
router.get("/authors/:id", getAuthor);
router.patch(
  "/authors/:id",
  isLoggedIn,
  hasRole("admin", "superadmin"),
  validate(patchAuthorSchema),
  patchAuthor
);
router.delete("/authors/:id", isLoggedIn, hasRole("admin", "superadmin"), deleteAuhor);

module.exports = router;
