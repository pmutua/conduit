
require('dotenv').config()
const cors = require('cors')
const swaggerUI = require("swagger-ui-express");
const swaggerDocument = require('./swagger.json');
const express = require("express");
const app = express();
const compression = require('compression')
require("./loaders/db.loader")(app);
require("./loaders/router.loader")(app);

app.use(cors());
app.use(require('morgan')('dev'));
app.use(cors({
  origin: '*'
}));
app.use('/documentation', swaggerUI.serve, swaggerUI.setup(swaggerDocument));
app.use(express.json());
app.use(compression());

// listen
app.listen(3000, (err, live) => {
  if (err) {
    console.log(err)
  }
  console.log("Server running on port 3000")
});
