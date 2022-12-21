const express = require('express');
const router = express.Router();
const ordersCtrl = require('../../controllers/api/orders');


router.get('/cart', ordersCtrl.cart);
router.get('/', ordersCtrl.getAllForUser);
router.post('/cart/items/:id', ordersCtrl.addToCart);
router.post('/cart/checkout', ordersCtrl.checkout);
router.delete('/delete/:id', ordersCtrl.removeFromCart);

module.exports = router;
