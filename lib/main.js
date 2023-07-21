"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _NumberDivider = require("./NumberDivider");
Object.keys(_NumberDivider).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _NumberDivider[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _NumberDivider[key];
    }
  });
});
var _NumberMultiplier = require("./NumberMultiplier");
Object.keys(_NumberMultiplier).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _NumberMultiplier[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _NumberMultiplier[key];
    }
  });
});