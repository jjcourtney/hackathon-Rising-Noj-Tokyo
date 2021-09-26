const router = require('express').Router();
const api = require('./api');
const homepage = require('./homepage');

router.use("/api", api);
router.use('/', homepage)

module.exports = router;