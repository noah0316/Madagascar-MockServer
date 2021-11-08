const statusCode = require("../../constants/statusCode");
const users = require("../../dbMockup/user");
const responseMessage = require("../../constants/responseMessage");

module.exports = async (ctx) => {
  const { email } = ctx.request.query;

  if (!email) {
    ctx.status = statusCode.BAD_REQUEST;
    ctx.body = {
      error: responseMessage.NULL_VALUE,
    };
    return;
  }

  let user = users.filter((obj) => obj.email === email)[0];
  if (!user) {
    ctx.status = statusCode.BAD_REQUEST;
    ctx.body = {
      error: responseMessage.NO_USER,
    };
    return;
  }

  delete user.password;

  ctx.status = statusCode.OK;
  ctx.body = {
    success: responseMessage.USER_GET_SUCCESS,
    data: user,
  };
};
