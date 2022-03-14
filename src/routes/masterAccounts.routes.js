const router = require('express').Router();

const { getMasterAccounts } = require('../controllers/masterAccount.controllers');

router.route('/').get(getMasterAccounts);

module.exports = router;