"use strict";

const render = require("mithril-node-render");
const tpl = require("./template");

function createMiddleware(route, opts) {
  const html = render(tpl(opts));
  return function middleware(req, res, next) {
    console.log(req.path);
    if (req.path === route) {
      res.send(html);
    }
    next();
  };
}

module.exports = {
  get: createMiddleware
};
