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

const router = express.Router();

router.post("/categories", validate(postCategorychema), postCategory);
router.get("/categories", validate(getCategorySchema), getCategories);
router.get("/categories/:id", getCategory);
router.patch("/categories/:id", validate(patchCategorychema), patchCategory);
router.delete("/categories/:id", deleteCategory);

module.exports = router;
