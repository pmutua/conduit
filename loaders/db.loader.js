const mongoose = require('mongoose');

const uri = process.env.MONGODB_URI

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = function () {
  const db = mongoose.connection
  db.once('open', _ => {
    console.log('Database connected:', uri)
  })

  db.on('error', err => {
    console.error('connection error:', err)
  })
}