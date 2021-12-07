const express = require('express');
const router = express.Router();
const generator = require('creditcard-generator');
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

const Card = require('../../models/Card');
const User = require('../../models/User');

// @route   POST api/cards
// @desc    Create a Card
// @access    Private

router.post('/',
  [
    auth, 
    [
      check('cardName', 'Card Name is required')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    try {
      const user = await User.findById(req.user.id).select('-password');

      const newCard = new Card({
        user: req.user.id,
        cardName: req.body.cardName,
        cardNumber: generator.GenCC("VISA").toString(),
        cardSecret: Math.floor(Math.random() * (999 - 100 + 1)) + 100,
        cardAmount: req.body.cardAmount
      })

      const card = await newCard.save();

      res.status(200).json(card);
    } catch(err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }

  }
);

// @route   GET api/cards
// @desc    Get Users Cards
// @access    Private

router.get('/', auth, async (req, res) => {
  try {
    const myCards = await Card.find({ user: req.user.id })

    if(myCards.length === 0) {
      return res.status(400).json({ msg: 'You haven\'t created a card yet!' });
    }

    res.status(200).json(myCards);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
})

module.exports = router;