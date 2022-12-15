const express = require('express');
const router = express.Router();
const shopCtrl = require('../../controllers/api/shop');

router.get('/search', shopCtrl.shopApi);

module.exports = router;