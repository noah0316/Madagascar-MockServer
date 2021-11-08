const statusCode = require("../../constants/statusCode");
const users = require("../../dbMockup/user");
const util = require("../../lib/util");
const responseMessage = require("../../constants/responseMessage");

module.exports = async (ctx) => {
  const { email, name, role, password } = ctx.request.body;

  if (!email || !name || !role || !password) {
    ctx.status = statusCode.BAD_REQUEST;
    ctx.body = {
      error: util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE),
    };
    return;
  }

  const alreadyUser = users.filter((obj) => obj.email === email).length > 0;
  if (alreadyUser) {
    ctx.status = statusCode.BAD_REQUEST;
    ctx.body = {
      error: util.fail(statusCode.BAD_REQUEST, responseMessage.ALREADY_EMAIL),
    };
  }

  const newUser = {
    id: users.length + 1,
    name,
    email,
    role,
  };

  ctx.status = statusCode.OK;
  ctx.body = {
    success: responseMessage.CREATED_USER,
    data: newUser,
  };
};
