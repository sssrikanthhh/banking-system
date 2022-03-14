const mongoose = require('mongoose');

const fixedAccountSchema = new mongoose.Schema({
  account_number: { type: String, required: true, unique: true },
  balance: { type: Number, required: true },
  interestRate: { type: Number, required: true },
  startDate: { type: Date, default: Date.now(), required: true },
  maturityDate: { type: Date, required: true },
  userId: { type: mongoose.Types.ObjectId, ref: 'user' },
  masterAccountId: {
    type: mongoose.Types.ObjectId,
    ref: 'masterAccount'
  }
}, { versionKey: false, timestamps: true });

const SavingsAccount = mongoose.model('savingsAccount', masterAccountSchema);

module.exports = SavingsAccount;