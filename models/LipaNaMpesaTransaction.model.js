


const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const lipaNaMpesaTransactionSchema = new Schema({
    Amount: {
        type: String,
        required: true,
    },
    MpesaReceiptNumber: {
        type: String,
        required: true,
    },
    TransactionDate: {
        type: String,
        required: true,
    },
    PhoneNumber: {
        type: String,
        required: true,
    },
},
    {
        timestamps: true
    });



module.exports = mongoose.model('LipaNaMpesaTransaction', lipaNaMpesaTransactionSchema)