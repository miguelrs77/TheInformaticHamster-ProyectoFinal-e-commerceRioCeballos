const { Router } = require("express");
const router = Router();
const { newAdmin, loginAdmin } = require("../controllers/admin.controller");

router.post('/', newAdmin);
router.post('/login', loginAdmin)

module.exports = router;
