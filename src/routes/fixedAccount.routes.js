const router = require('express').Router();

const { createFixedAccount } = require('../routes/fixedAccount.routes');

router.route('/').post(createFixedAccount);

module.exports = router;