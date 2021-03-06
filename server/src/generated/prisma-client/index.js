"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "Work",
    embedded: false
  },
  {
    name: "Experience",
    embedded: false
  },
  {
    name: "Role",
    embedded: false
  },
  {
    name: "Category",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://eu1.prisma.sh/marion-36c618/server/dev`
});
exports.prisma = new exports.Prisma();
