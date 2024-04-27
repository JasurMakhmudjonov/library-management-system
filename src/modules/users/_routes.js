const express = require("express");
const {
  postUser,
  getUsers,
  getUser,
  patchUser,
  deleteUser,
} = require("./_controllers");
const validate = require("../../shared/middlewares/validate");
const {
  getUsersSchema,
  postUserSchema,
  patchUserSchema,
} = require("./_schemas");
const isLoggedIn = require("../../shared/middlewares/is-logged-in");
const hasRole = require("../../shared/middlewares/has-role");

const router = express.Router();

router.post(
  "/users",
  isLoggedIn,
  hasRole("admin"),
  validate(postUserSchema),
  postUser
);
router.get(
  "/users",
  isLoggedIn,
  hasRole("admin"),
  validate(getUsersSchema),
  getUsers
);
router.get("/users/:id", getUser);
router.patch(
  "/users/:id",
  isLoggedIn,
  hasRole("admin"),
  validate(patchUserSchema),
  patchUser
);
router.delete("/users/:id", isLoggedIn, hasRole("admin"), deleteUser);

module.exports = router;
