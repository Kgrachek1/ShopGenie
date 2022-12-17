const express = require('express');
const router = express.Router();
const addCtrl = require('../../controllers/api/shop');

router.get('/cart', addCtrl.cart);
router.post('/cart/items/:id', addCtrl.addToCart);

module.exports = router;
