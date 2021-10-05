const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const transactionSchema = new Schema({
    description: {
        type: String,
        required: true,
    },
},
{
    timestamps:true
});



module.exports = mongoose.model('Transaction',transactionSchema)