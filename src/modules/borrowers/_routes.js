
const express = require("express");
const validate = require("../../shared/middlewares/validate");
const { postBorrowerSchema, getUsersSchema, patchBorrowerSchema } = require("./_schemas");
const { postBorrower, getBorrowers, getBorrower, patchBorrower, deleteBorrower } = require("./_controllers");



const router = express.Router();

router.post("/borrowers", validate(postBorrowerSchema), postBorrower);
router.get("/borrowers", validate(getUsersSchema), getBorrowers);
router.get("/borrowers/:id", getBorrower);
router.patch("/borrowers/:id", validate(patchBorrowerSchema), patchBorrower);
router.delete("/borrowers/:id", deleteBorrower);

module.exports = router;