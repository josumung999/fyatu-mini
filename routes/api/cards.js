const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

const Card = require('../../models/Card');
const User = require('../../models/User');

// @route   POST api/cards
// @desc    Create or Update a Card
// @access    Public

router.post('/', [
  auth, 
  [
    check('cardName', 'Card Name is required')
      .not()
      .isEmpty()
  ]
],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
  }
)

module.exports = router;