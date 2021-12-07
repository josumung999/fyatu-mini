const express = require('express');
const router = express.Router();


// @route   GET api/cards
// @desc    Test Route
// @access    Public

router.get('/', (req, res) => res.send('Card Route'));

module.exports = router;