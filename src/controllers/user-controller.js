const { StatusCodes } = require("http-status-codes");

const { UserService } = require("../services");
const { SuccessResponse, ErrorResponse } = require("../utils/common");


// post: /signup 
//req-body{email: 'work.goutampatel@gmail.com' password: '156161641'}


async function signup(req, res) {
  try {
    console.log(req.body);
    const user = await UserService.create({
      email: req.body.email,
      password: req.body.password
    });
    SuccessResponse.data = user;
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
  }
}

async function signin(req, res) {
  try {
    const user = await UserService.signin({
      email: req.body.email,
      password: req.body.password
    });
    SuccessResponse.data = user;
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
  }
}



module.exports = {
    signup,
    signin
};
