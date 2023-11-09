const { Router } = require("express");
const router = Router();
const createUser = require("../controllers/signUp.controller");

router.post('/', createUser);

module.exports = router;
