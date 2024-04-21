
const express = require("express");
const validate = require("../../shared/middlewares/validate");
const { postBorrowerSchema, getUsersSchema, patchBorrowerSchema } = require("./_schemas");
const { postBorrower, getBorrowers, getBorrower } = require("./_controllers");
const editBorrower = require("./edit-borrower");
const deleteBorrower = require("./remove-borrower");


const router = express.Router();

router.post("/borrowers", validate(postBorrowerSchema), postBorrower);
router.get("/borrowers", validate(getUsersSchema), getBorrowers);
router.get("/borrowers/:id", getBorrower);
router.patch("/borrowers/:id", validate(patchBorrowerSchema), editBorrower);
router.delete("/borrowers/:id", deleteBorrower);

module.exports = router;