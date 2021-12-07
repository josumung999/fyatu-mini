const mongoose = require('mongoose');

const Schema = mongoose.Schema()

const CardSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
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
  { timestamps: 4 }
)

module.exports = Card = mongoose.model('card', CardSchema);