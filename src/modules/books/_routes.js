const express = require("express");
const { postBook, getBooks, getBook, patchBook, deleteBook } = require("./_controllers");
const validate = require("../../shared/middlewares/validate");
const { postBookSchema, getBooksSchema, patchBookSchema } = require("./_schemas");


const router = express.Router();

router.post("/books", validate(postBookSchema), postBook);
router.get("/books", validate(getBooksSchema), getBooks)
router.get("/books/:id",  getBook)
router.patch("/books/:id", validate(patchBookSchema), patchBook )
router.delete("/books/:id", deleteBook)
module.exports = router;
