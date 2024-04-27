const express = require("express");
const { postAuthor, getAuthors, getAuthor, patchAuthor, deleteAuhor } = require("./_controllers");
const validate = require("../../shared/middlewares/validate");
const {
  getAuthorsSchema,
  postAuthorSchema,
  patchAuthorSchema,
} = require("./_schemas");


const router = express.Router();

router.post("/authors", validate(postAuthorSchema), postAuthor);
router.get("/authors", validate(getAuthorsSchema), getAuthors);
router.get("/authors/:id", getAuthor);
router.patch("/authors/:id", validate(patchAuthorSchema), patchAuthor);
router.delete("/authors/:id", deleteAuhor);


module.exports = router;
