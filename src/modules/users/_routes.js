const express = require("express");
const {postUser, getUsers, getUser, patchUser, deleteUser} = require("./_controllers");
const validate = require("../../shared/middlewares/validate");
const { getUsersSchema, postUserSchema, patchUserSchema } = require("./_schemas");


const router = express.Router();

router.post("/users", validate(postUserSchema),postUser);
router.get("/users", validate(getUsersSchema), getUsers);
router.get("/users/:id", getUser);
router.patch("/users/:id", validate(patchUserSchema), patchUser);
router.delete("/users/:id", deleteUser );

module.exports = router;
