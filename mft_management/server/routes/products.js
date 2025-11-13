const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');

// @route   GET api/products
// @desc    Get all products
// @access  Private
router.get('/', auth, (req, res) => {
  res.json({ msg: 'Products route' });
});

module.exports = router;
