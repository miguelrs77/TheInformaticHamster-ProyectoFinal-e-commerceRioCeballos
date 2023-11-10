const passport = require("passport");
// Si req tiene un JWT, entonces autenticamos
const authCheck = passport.authenticate("jwt", { session: false });

module.exports = authCheck;
