const express = require("express");
const { postBookCopy, getBookCopy } = require("./_controllers");
const router = express.Router();

router.post("/book-copies", postBookCopy);
router.get("/book-copies/:id", getBookCopy);
router.get("/book-copies/:id/loans");

module.exports = router;
