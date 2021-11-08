const Koa = require("koa");
const Router = require("koa-router");
const json = require("koa-json");
const bodyParser = require("koa-bodyparser");
const api = require("./api");

const app = new Koa();
const router = new Router();

app.use(bodyParser());
router.use("/api", api.routes());
app.use(router.routes()).use(router.allowedMethods());

app.listen(4000, () => {
  console.log("Server is running at http://localhost:4000");
});
