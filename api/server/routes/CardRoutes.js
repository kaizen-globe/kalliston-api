const express = require("express");
const router = express.Router();
const { getCardDetails, addCard} = require('../controllers/CardController');
const { verifyToken } = require('../middleware/AuthJWT');

router.get('/get-card-details',[verifyToken],getCardDetails);
router.post('/add-card',[verifyToken],addCard);

module.exports = router;