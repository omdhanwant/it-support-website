const express = require('express');
const router = express.Router();

const controller = require('../controllers/mail-transfer-controller');

router.post( '/send-mail', controller.sendMialController);

module.exports = router;