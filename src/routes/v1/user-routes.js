const express = require('express');
const { UserController } = require('../../controllers')
const router = express.Router();
const { AuthRequestMiddlewares } = require('../../middlewares');

router.post('/signup', AuthRequestMiddlewares.validateAuthRequest, UserController.signup);

router.post('/signin', AuthRequestMiddlewares.validateAuthRequest, UserController.signin);


module.exports = router; 