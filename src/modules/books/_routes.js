const express = require("express");
const {
  postBook,
  getBooks,
  getBook,
  patchBook,
  deleteBook,
} = require("./_controllers");
const validate = require("../../shared/middlewares/validate");
const {
  postBookSchema,
  getBooksSchema,
  patchBookSchema,
} = require("./_schemas");
const isLoggedIn = require("../../shared/middlewares/is-logged-in");
const hasRole = require("../../shared/middlewares/has-role");

const router = express.Router();

router.post(
  "/books",
  isLoggedIn,
  hasRole("admin", "superadmin"),
  validate(postBookSchema),
  postBook
);
router.get(
  "/books",
  isLoggedIn,
  hasRole("admin", "superadmin"),
  validate(getBooksSchema),
  getBooks
);
router.get("/books/:id", getBook);
router.patch(
  "/books/:id",
  isLoggedIn,
  hasRole("admin", "superadmin"),
  validate(patchBookSchema),
  patchBook
);
router.delete("/books/:id", isLoggedIn, hasRole("admin", "superadmin"), deleteBook);

  
module.exports = router;
