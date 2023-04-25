import router from "express";
import { hello } from "../lib/locale.js";
import { capitalize } from "../lib/string.js";

export const helloRouter = router();

//url start with hello create two GET request functions

// hello in english
helloRouter.get("/:name", (req, res, next) => {
  res.render("message", {
    title: `${hello.en} ${capitalize(req.params.name)}!!`,
  });
});

// hello i specific language
helloRouter.get("/:lang/:name", (req, res, next) => {
  res.render("message", {
    title: `${hello[req.params.lang] || hello.en} ${capitalize(req.params.name)} !!`,
  });
});
