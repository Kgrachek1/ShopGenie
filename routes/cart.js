// Import the Express router
const router = require('express').Router();

// Define the route for the Cart page
router.get('/cart', (req, res) => {
  // Redirect the user to the Cart page
  res.redirect('/cart');
});

// Export the router
module.exports = router;
