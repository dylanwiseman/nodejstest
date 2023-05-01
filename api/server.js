const path = require("path");
const Koa = require("koa");
const KoaStatic = require("koa-static");
const app = new Koa();

app.use(KoaStatic(path.join(__dirname, "client", "public")));

const indexRouter = require("./routes/index");
app.use(indexRouter.routes());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
