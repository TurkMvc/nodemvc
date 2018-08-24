const express = require('express');
const router = express.Router();

const controller = require('../controllers/editProfile');

router.get('/', controller.index);
router.post('/', controller.editProfile);

module.exports = router;