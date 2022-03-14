const router = require('express').Router();

const { getUsers, createUser } = require('../controllers/users.controllers');

router.route('/').get(getUsers).post(createUser);

module.exports = router;