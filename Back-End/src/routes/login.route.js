const { Router } = require("express");
const router = Router();
const loginUser = require("../controllers/login.controller");

router.post('/', loginUser);

module.exports = router;