const reqMessage = require("./logging.middleware");
const authIsUser = require('./authIsUser.middleware');
const authIsAdmin = require('./authIsAdmin.middleware');

module.exports = {
  reqMessage,
  authIsUser,
  authIsAdmin,
};
