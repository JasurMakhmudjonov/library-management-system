const express = require("express");
const { postLoan, getLoans, postReturnLoan } = require("./_controllers");
const validate = require("../../shared/middlewares/validate");
const { postLoanSchema, getLoansSchema } = require("./_schemas");
const isLoggedIn = require("../../shared/middlewares/is-logged-in");
const router = express.Router();

router.post("/loans", isLoggedIn, validate(postLoanSchema), postLoan);
router.post("/loans/:id/return", isLoggedIn, postReturnLoan);
router.get("/loans", isLoggedIn, validate(getLoansSchema), getLoans);

module.exports = router;
