const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');

// @route   GET api/users
// @desc    Get all users
// @access  Private
router.get('/', auth, (req, res) => {
  res.json({ msg: 'Users route' });
});

module.exports = router;
