const User = require('../models/user.models');

const getUsers = async (req, res) => {
  try {
    const users = await User.find({}).lean().exec();
    return res.status(200).send(users);
  } catch (err) {
    return res.status(500).send({ err });
  }
};

const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body.params).lean().exec();
    return res.status(200).send(req.parms.body);
  } catch (err) {
    return res.status(500).send({ err });
  }
};



module.exports = { getUsers, createUser };