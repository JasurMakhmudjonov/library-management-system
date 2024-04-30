const express = require("express");
const { postBookCopy, getBookCopy } = require("./_controllers");
const validate = require("../../shared/middlewares/validate");
const { postBookCopySchema } = require("./_schemas");


const router = express.Router();

router.post("/book-copies",validate(postBookCopySchema), postBookCopy);
router.get("/book-copies/:id", getBookCopy);
router.get("/book-copies/:id/loans");

module.exports = router;
