const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  items: [
    {
      itemId: {
        type: String,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
      item:{
        title: {type: String},
        price:{type: Number},
        main_image: {type: String, required: true },
        description: {type: String}
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
