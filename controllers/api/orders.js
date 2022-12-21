const  Order  = require('../../models/order');

module.exports = {
    cart,
    addToCart,
    removeFromCart,
    checkout,
    getAllForUser
  }
  async function cart(req, res) {
    try {
      const cart = await Order.getCart(req.user._id);
      res.json(cart)
    } catch (err) {
      res.status(400).json(err);
    }
  }
  async function addToCart(req, res) {
    try {
      const cart = await Order.getCart(req.user._id);
      await cart.addItemToCart(req.params.id);
      res.json(cart);
    } catch (err) {
      res.status(400).json(err);
    }
  }
  async function removeFromCart(req, res) {
    try {
      req.body.user = req.user._id;
      const cart = await Order.getCart(req.user._id);
      const itemIndex = cart.lineItems.findIndex(item => item._id == req.body.itemId);
      cart.lineItems.splice(itemIndex, 1);
      cart.save();
      res.json(cart);
    } catch (err) {
      res.status(400).json(err)
    }
  }
  
async function checkout(req, res) {
  const cart = await Order.getCart(req.user._id);
  cart.isPaid = true;
  await cart.save();
  console.log(cart)
  res.json(cart);
}
async function getAllForUser(req, res) {
  const orders = await Order.find({user: req.user._id, isPaid: true}).sort('-updatedAt');
  res.json(orders);
}

  
  
  