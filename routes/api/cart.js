const express = require('express');
const router = express.Router();
const addCtrl = require('../../controllers/api/shop');
const shopCtrl = require('../../controllers/api/shop');

router.get('/cart/items', shopCtrl.getCartItems);
router.get('/cart/items/:id', shopCtrl.getCartItems);
router.post('/cart/items/:id', shopCtrl.handleaddToCart);
router.delete('/cart/items/:id', shopCtrl.removeFromCart);
router.put('/cart/items/:id', shopCtrl.updateCartItem);
router.get('/cart', shopCtrl.handleaddToCart);
router.post('/cart/items/:id', shopCtrl.addToCart);

module.exports = router;
