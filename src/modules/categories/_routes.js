const express = require("express");
const {
  postCategory,
  getCategory,
  getCategories,
  patchCategory,
  deleteCategory,
} = require("./_controllers");
const validate = require("../../shared/middlewares/validate");
const {
  postCategorychema,
  getCategorySchema,
  patchCategorychema,
} = require("./_schemas");
const isLoggedIn = require("../../shared/middlewares/is-logged-in");
const hasRole = require("../../shared/middlewares/has-role");

const router = express.Router();

router.post(
  "/categories",
  isLoggedIn,
  hasRole("admin"),
  validate(postCategorychema),
  postCategory
);
router.get(
  "/categories",
  isLoggedIn,
  hasRole("admin"),
  validate(getCategorySchema),
  getCategories
);
router.get("/categories/:id", getCategory);
router.patch(
  "/categories/:id",
  isLoggedIn,
  hasRole("admin"),
  validate(patchCategorychema),
  patchCategory
);
router.delete("/categories/:id", isLoggedIn, hasRole("admin"), deleteCategory);

module.exports = router;
