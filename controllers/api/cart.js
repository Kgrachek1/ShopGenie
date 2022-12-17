// const cart = require('../../models/cart');

// module.exports = {
//   cart,
//   addToCart
// }

// async function cart(req, res) {
//     try {
//       const cart = await cart.getCart(req.user._id);
//       res.json(cart)
//     } catch (err) {
//       res.status(400).json(err);
//     }
//   }
  
//   async function addToCart(req, res) {
//     try {  
//       const cart = await cart.getCart(req.user._id);
//       await cart.addItemToCart(req.params.id);
//       res.json(cart);
//     } catch (err) {
//       res.status(400).json(err);
//     }
//   }