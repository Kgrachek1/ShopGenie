const express = require('express');
const cart = require('../../models/cart');
const router = express.Router();
const shopCtrl = require('../../controllers/api/shop')

module.exports = {
    getCartItems,
    removeFromCart,
    updateCartItem,
    handleaddToCart
}


async function handleaddToCart(req, res) {
    try {
        const cart = await cart.getCart(req.user._id);
        await cart.addItemToCart(req.params.id);
        res.json(cart);
    } catch (err) {
        res.status(400).json(err);
    }   
}

async function removeFromCart(req, res) {
    try {
        const cart = await cart.getCart(req.user._id);
        await cart.removeItemFromCart(req.params.id);
        res.json(cart);
    } catch (err) {
        res.status(400).json(err);
    }
}

async function updateCartItem(req, res) {
    try {
        const cart = await cart.getCart(req.user._id);
        await cart.updateItemQuantity(req.params.id, req.body.quantity);
        res.json(cart);
    } catch (err) {
        res.status(400).json(err);
    }
}


    async function getCartItems(req, res) {
        try {
            const cart = await cart.getCart(req.user._id);
            res.json(cart);
        } catch (err) {
            res.status(400).json(err);
        }
        }
