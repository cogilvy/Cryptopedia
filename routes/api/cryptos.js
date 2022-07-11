const express = require('express');
const router = express.Router();
const cryptosCtrl = require('../../controllers/api/cryptos');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// POST - '/api/users'
router.get('/top100', cryptosCtrl.fetchTop100);


module.exports = router;