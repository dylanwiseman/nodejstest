const KoaRouter = require("koa-router");
const send = require("koa-send");

const indexRouter = new KoaRouter();

indexRouter.get("/", async function (ctx) {
  await send(ctx, "index.html", { root: "../client/public" });
});

// indexRouter.get("*", async function (ctx) {
//   await send(ctx, ctx.path, { root: "./client/public" });
// });

module.exports = indexRouter;
