const statusCode = require("../../constants/statusCode");
const users = require("../../dbMockup/user");
const util = require("../../lib/util");
const responseMessage = require("../../constants/responseMessage");

module.exports = async (ctx) => {
  const { email, password } = ctx.request.body;

  if (!email || !password) {
    ctx.status = statusCode.BAD_REQUEST;
    ctx.body = {
      error: util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE),
    };
    return;
  }

  let user = users.filter(
    (obj) => obj.email === email && obj.password == password
  )[0];
  if (!user) {
    ctx.status = statusCode.BAD_REQUEST;
    ctx.body = {
      error: util.fail(statusCode.BAD_REQUEST, responseMessage.NO_USER),
    };
    return;
  }

  ctx.status = statusCode.OK;
  ctx.body = {
    success: responseMessage.LOGIN_SUCCESS,
    data: user,
  };
};
