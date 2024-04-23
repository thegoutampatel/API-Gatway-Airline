const express = require('express');

const { InfoController, UserController } = require('../../controllers');

const { AuthRequestMiddlewares } = require('../../middlewares');

const UserRoute = require('./user-routes');
const router = express.Router();

router.get('/info', AuthRequestMiddlewares.checkAuth, InfoController.info);

router.use('/user', UserRoute);

module.exports = router; 