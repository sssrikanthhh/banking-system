const FixedAccount = require('../models/fixedAccount.models');

const createFixedAccount = async (req, res) => {
  try {
    const fixedAccount = await FixedAccount.create(req.body.params).lean().exec();
    return res.status(200).send(fixedAccount);
  } catch (err) {
    return res.status(500).send({ err });
  }
};

module.exports = { createFixedAccount };