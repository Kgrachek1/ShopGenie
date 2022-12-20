const express = require('express');
const router = express.Router();
const shopCtrl = require('../../controllers/api/items');

router.get('/search', shopCtrl.shopApi);

module.exports = router;