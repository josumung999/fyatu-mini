const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CardSchema = new Schema(
  {
    user: {
      type: Schema.ObjectId,
      ref: 'users'
    },
    cardName: {
      type: String,
      required: true
    },
    cardNumber: {
      type: String,
      required: true
    },
    CardSecret: {
      type: Number,
      required: true
    },
    cardStatus: {
      type: Boolean,
      default: "Active"
    },
    cardAmount: {
      type: Number
    }
  },
  { timestamps: true }
)

module.exports = Card = mongoose.model('card', CardSchema);