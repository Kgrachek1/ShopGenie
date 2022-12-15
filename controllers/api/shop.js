const fetch = require('node-fetch');
const API_KEY = process.env.API_KEY;

module.exports = {
  shopApi 
}

async function shopApi(req, res) {
  try {
    let response = await fetch(`https://api.bluecartapi.com/request?api_key=${API_KEY}&search_term=${req.query.q}&type=search`)
    let items = await response.json()
    res.json(items)
  } catch (err) {
    res.status(400).json(err)
  }
}

