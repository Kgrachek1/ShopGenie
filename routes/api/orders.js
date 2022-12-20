const express = require('express');
const router = express.Router();
const ordersCtrl = require('../../controllers/api/orders');


router.get('/cart', ordersCtrl.cart);
router.post('/cart/items/:id', ordersCtrl.addToCart);
router.delete('/cart/items/:id', ordersCtrl.removeFromCart);

module.exports = router;
