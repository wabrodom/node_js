import express from "express";
import { fileURLToPath } from "url";
import { dirname, sep } from "path";
import compression from "compression";
import { helloRouter } from "./routes/hello.js";

const __dirname = dirname(fileURLToPath(import.meta.url)) + sep;
const config = {
  port: process.env.PORT || 3000,
  dir: {
    root: __dirname,
    static: __dirname + "static" + sep,
    views: __dirname + "views" + sep,
  },
};

console.dir(config, { depth: null, color: true });

// express initializaion
const app = express();
// do not identify Express in http response header
app.disable("x-powered-by");

app.use(compression());

app.set("view engine", "ejs");
app.set("views", config.dir.views);

// middleware 3 args, and always has next(), to be real middelware
app.use((req, res, next) => {
  console.log(req.url);
  next();
});

// when app get req from (thisRoute, routingFuctionRun)
app.get("/", (req, res) => {
  res.render("message", { title: "hello world" });
});

// use helloRouter middleware
app.use("/hello", helloRouter);

// ... (express.static('static')) is a middleware fn
// app.use(express.static("static"));
app.use(express.static(config.dir.static));

app.use((req, res) => {
  res.status(404).render("message", { title: "Not found" });
});

// start server
app.listen(config.port, () => {
  console.log(`Example app listening at http://localhost:${config.port}`);
});

export { config, app };
