const express = require("express");
// var indexRouter = require("../routes/index");
// var router1Router = require("../routes/router1");
var transactionsRouter = require("../routes/transactions");
var c2bRouter = require("../routes/c2b.routes");
var lipaNaMpesaRouter = require("../routes/LipaNaMpesa.route");

module.exports = function(app) {
  app.use(express.json());

//   app.use("/", indexRouter);
//   app.use("/router1", router1Router);
  app.use("/transactions", transactionsRouter);
  app.use("/c2b", c2bRouter);
  app.use("/lipa_na_mpesa/", lipaNaMpesaRouter);
}