const fetch = require('node-fetch');
const API_KEY = process.env.API_KEY;
const Item = require('../../models/item');

module.exports = {
    shopApi
}

async function shopApi(req, res) {
    try {
        let response = await fetch(`https://api.bluecartapi.com/request?api_key=${API_KEY}&search_term=${req.query.q}&type=search`)
        let items = await response.json()
        for (item of items.search_results) {
            const exists = await Item.exists({item_id: item.product.item_id})
            if (! exists) {
                await Item.create({
                    title: item.product.title,
                    main_image: item.product.main_image,
                    rating: item.product.rating,
                    description: item.product.description,
                    price: item.offers.primary.price,
                    item_id: item.product.item_id,
                    ratings_total: item.product.ratings_total
                })
            }
        }res.json(items)
    } catch (err) {
        res.status(400).json(err)
    }
}
