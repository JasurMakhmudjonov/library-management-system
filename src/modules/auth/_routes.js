const express = require("express");
const { postLogin } = require("./_controllers");
const validate = require("../../shared/middlewares/validate");
const { postLoginSchema } = require("./_schemas");


const router = express.Router();

router.post('/auth/login',validate(postLoginSchema), postLogin);

module.exports = router;
