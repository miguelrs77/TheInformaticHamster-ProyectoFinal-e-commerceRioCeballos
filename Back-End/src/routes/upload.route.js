const { Router } = require("express");
const router = Router();
const { authIsAdmin } = require('../middleware');
const uploadImage = require("../controllers/upload.controller");
const upload = require("../middleware/multer.middleware");

router.post('/', authIsAdmin, upload.single("file"), uploadImage);

module.exports = router;
