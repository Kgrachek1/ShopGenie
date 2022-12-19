const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  items: [
    {
      itemId: {
        type: Number,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
      item:{
        title: item.product.title,
        price: item.offers.primary.price,
        main_image: item.product.main_image
 
      }
    },
  ],
  cartTotal: {
    type: Number,
    required: true,
  },
  itemsTotal: {
    type: Number,
    required: true,
  },
});



const Cart = mongoose.model('Cart', cartSchema);


module.exports = { Cart };
