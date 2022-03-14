const mongoose = require('mongoose');

const masterAccountSchema = new mongoose.Schema({
  balance: { type: Number, required: true },
  userId: { type: mongoose.Types.ObjectId, ref: 'user' },
  branchDetailId: {
    type: mongoose.Types.ObjectId,
    ref: 'branchDetail'
  }
}, { versionKey: false, timestamps: true });

const MasterAccount = mongoose.model('masterAccount', masterAccountSchema);

module.exports = MasterAccount;