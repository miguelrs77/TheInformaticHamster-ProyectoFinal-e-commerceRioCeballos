const { Router } = require("express");
const router = Router();
const { authIsAdmin } = require('../middleware');
const { createInfoCard, getInfoCardId, findInfoCards, updateInfoCard, deleteInfoCard } = require("../controllers/infoCard.controller");

router.post('/', createInfoCard);
router.get('/:infoCardId', getInfoCardId);
router.get('/', findInfoCards);
router.put('/:infoCardId', authIsAdmin, updateInfoCard);
router.delete('/:infoCardId', authIsAdmin, deleteInfoCard);

module.exports = router;
