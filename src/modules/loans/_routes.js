const express = require("express");
const { getHello } = require("./_controllers");
const router = express.Router();

router.post('/loans', getHello);
router.post("/loans/:id/return");
reuter.get('/loans')

module.exports = router;
