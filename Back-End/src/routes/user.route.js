const { Router } = require("express");
const router = Router();
const { authIsAdmin } = require('../middleware');
const { getUserId, findUsers, updateUser, deleteUser } = require("../controllers/user.controller");

router.get('/:userId', getUserId);
router.get('/', findUsers);
router.put('/:userId', authIsAdmin, updateUser);
router.delete('/:userId', authIsAdmin, deleteUser);

module.exports = router;
