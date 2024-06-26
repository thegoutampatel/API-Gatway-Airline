const { StatusCodes } = require('http-status-codes');

const { ErrorResponse } = require('../utils/common');
const AppError = require('../utils/errors/app-error');
const { UserService } = require('../services');


function validateAuthRequest(req, res, next) {
    if(!req.body.email) {
        ErrorResponse.message = 'Something went wrong while Authenticating User';
        ErrorResponse.error = new AppError([' Email not found in the oncoming request in the correct form'], StatusCodes.BAD_REQUEST);
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
    }

    if(!req.body.password) {
        ErrorResponse.message = 'Something went wrong while Authenticating User';
        ErrorResponse.error = new AppError([' Password not found in the oncoming request in the correct form'], StatusCodes.BAD_REQUEST);
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
    }
    next();
}

async function checkAuth(req, res, next) {
    try {
        const response =  await UserService.isAuthenticated(req.headers['x-access-token']);
        if(isAuthenticated){
            req.user = response; //setting the user id in the req obj 
            next();
        }
    } catch (error) {
        return res
                .status(error.statusCode)
                .json(error);
    }
    
}

async function isAdmin(req, res, next){
    try {
        const response = await UserService.isAdmin(req.user);
        if(!response){
            return res
                .status(StatusCodes.UNAUTHORIZED)
                .json({message: 'User is not Authorized for this action'});
        }
        next();
    } catch (error) {
        
    }
}
module.exports = {
    validateAuthRequest,
    checkAuth,
    isAdmin
}