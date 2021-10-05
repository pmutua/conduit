const mongoose = require('mongoose');

const uri = process.env.LOCAL_MONGODB_URL

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});

// const db = mongoose.connection
// 

module.exports = function() {
    const db = mongoose.connection
    db.once('open', _ => {
        console.log('Database connected:', uri)
      })
      
      db.on('error', err => {
        console.error('connection error:', err)
      })   
}