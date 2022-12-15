const express = require('express');
const router = express.Router();
const shopCtrl = require('../../controllers/api/shop');

router.get('/shop/new', shopCtrl.create)

module.exports = router;