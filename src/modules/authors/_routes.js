const express = require("express");
const { postAuthor, getAuthors, getAuthor } = require("./_controllers");
const validate = require("../../shared/middlewares/validate");
const {
  getAuthorsSchema,
  postAuthorSchema,
  patchAuthorSchema,
} = require("./_schemas");
const editAuthor = require("./edit-author");
const deleteAuthor = require("./remove-author");

const router = express.Router();

router.post(".authors", validate(postAuthorSchema), postAuthor);
router.get("/authors", validate(getAuthorsSchema), getAuthors);
router.get("/authors/:id", getAuthor);
router.patch("/authors/:id", validate(patchAuthorSchema), editAuthor);
router.delete("/authors/:id", deleteAuthor);

module.exports = router;
