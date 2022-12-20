const express = require('express');
const router = express.Router();
const shopCtrl = require('../../controllers/api/items');


router.get('/cart', shopCtrl.cart);
router.post('/cart/items/:id', shopCtrl.addToCart);

module.exports = router;
