const express = require("express");
const transactionsRouter = require("../routes/transactions");
const c2bRouter = require("../routes/c2b.routes");
const lipaNaMpesaRouter = require("../routes/LipaNaMpesa.route");

module.exports = function(app) {
  app.use(express.json());

  app.use("/transactions", transactionsRouter);
  app.use("/c2b", c2bRouter);
  app.use("/lipa_na_mpesa/", lipaNaMpesaRouter);
}