const express = require('express');

const { InfoController, UserController } = require('../../controllers');

const UserRoute = require('./user-routes');
const router = express.Router();

router.get('/info', InfoController.info);

router.use('/user', UserRoute);

module.exports = router; 