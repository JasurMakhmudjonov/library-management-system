const express = require("express");
const validate = require("../../shared/middlewares/validate");
const {
  postBorrowerSchema,
  getUsersSchema,
  patchBorrowerSchema,
} = require("./_schemas");
const {
  postBorrower,
  getBorrowers,
  getBorrower,
  patchBorrower,
  deleteBorrower,
} = require("./_controllers");
const isLoggedIn = require("../../shared/middlewares/is-logged-in");
const hasRole = require("../../shared/middlewares/has-role");

const router = express.Router();

router.post(
  "/borrowers",
  isLoggedIn,
  hasRole("admin"),
  validate(postBorrowerSchema),
  postBorrower
);
router.get(
  "/borrowers",
  isLoggedIn,
  hasRole("admin"),
  validate(getUsersSchema),
  getBorrowers
);
router.get("/borrowers/:id", getBorrower);
router.patch(
  "/borrowers/:id",
  isLoggedIn,
  hasRole("admin"),
  validate(patchBorrowerSchema),
  patchBorrower
);
router.delete("/borrowers/:id", isLoggedIn, hasRole("admin"), deleteBorrower);

module.exports = router;
