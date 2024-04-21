const express = require("express");
const { postCategory, getCategory, getCategories } = require("./_controllers");
const validate = require("../../shared/middlewares/validate");
const {
  postCategorychema,
  getCategorySchema,
  patchCategorychema,
} = require("./_schemas");
const editCategory = require("./edit-category");
const deleteCategory = require("./remove-category");
const router = express.Router();

router.get("/", validate(postCategorychema), postCategory);
router.get("/categody", validate(getCategorySchema), getCategories);
router.get("/categody/:id", getCategory);
router.patch("/categody/:id", validate(patchCategorychema), editCategory);
router.delete("/categody/:id", deleteCategory);

module.exports = router;
