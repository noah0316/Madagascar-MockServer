const Router = require("koa-router");
const user = new Router();

user.get("/", require("./userByEmailGET"));
user.get("/:userId", require("./userGET"));
user.post("/login", require("./userLoginPOST"));
user.post("/signup", require("./userSignupPOST"));
module.exports = user;
