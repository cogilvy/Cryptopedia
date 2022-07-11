const express = require('express');
const router = express.Router();
const cryptosCtrl = require('../../controllers/api/cryptos');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/top100', cryptosCtrl.fetchTop100);
router.get('/:id', cryptosCtrl.fetchCryptoData);


module.exports = router;