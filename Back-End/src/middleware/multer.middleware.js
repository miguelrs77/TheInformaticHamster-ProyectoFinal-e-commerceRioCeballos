const Multer = require("multer");
// MULTER
const storage = new Multer.memoryStorage();
const upload = Multer({
  storage,
});

module.exports = upload;
