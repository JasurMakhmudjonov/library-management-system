const express = require("express");
const exampleRouters = require("../modules/example/_routes");
const authorRouters = require("../modules/authors/_routes");
const publisherRoutes = require("../modules/publishers/_routes");
const userRoutes = require("../modules/users/_routes");
const bookRoutes = require("../modules/books/_routes");
const categoryRoutes = require("../modules/categories/_routes");
const borrowerRoutes = require("../modules/borrowers/_routes");
const authRoutes = require("../modules/auth/_routes");
const bookCopyRoutes = require("../modules/book_copies/_routes");
const loanRoutes = require("../modules/loans/_routes");
const handleError = require("../shared/errors/handle-errors");
const handleErrors = require("../shared/errors/handle-errors");

const router = express.Router();

router.use(exampleRouters);
router.use(authorRouters);
router.use(publisherRoutes);
router.use(userRoutes);
router.use(bookRoutes);
router.use(categoryRoutes);
router.use(borrowerRoutes);
router.use(authRoutes);
router.use(loanRoutes);
router.use(bookCopyRoutes);

router.use(handleErrors);

module.exports = router;
