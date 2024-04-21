const express = require("express");
const { postBook, getBooks, getBook } = require("./_controllers");
const validate = require("../../shared/middlewares/validate");
const { postBookSchema, getBooksSchema, patchBookSchema } = require("./_schemas");
const editBook = require("./edit-book");
const deleteBook = require("./remove-book")

const router = express.Router();

router.post("/books", validate(postBookSchema), postBook);
router.get("/books", validate(getBooksSchema), getBooks)
router.get("/books/:id",  getBook)
router.patch("/books/:id", validate(patchBookSchema), editBook )
router.delete("/books/:id", deleteBook)
module.exports = router;
