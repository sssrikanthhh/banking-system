const MasterAccount = require('../models/masterAccount.models');

const getMasterAccounts = async (req, res) => {
  try {
    const masterAccounts = await MasterAccount.find({}).lean().exec();
    return res.status(200).send(masterAccounts);
  } catch (err) {
    return res.status(500).send({ err });
  }
};

module.exports = { getMasterAccounts };