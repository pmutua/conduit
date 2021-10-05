const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const c2BSchema = new Schema({
    ShortCode: {
        type: String,
        required: true,
    },
    ResponseType: {
        type: String,
        required: true,
    },
    ConfirmationURL: {
        type: String,
        required: true,
    },
    ValidationURL: {
        type: String,
        required: true,
    },
    OriginatorCoversationID: {
        type: String,
        required: true,
    },
    ResponseCode: {
        type: String,
        required: true,
    },
    ResponseDescription: {
        type: String,
        required: true,
    },
},
{
    timestamps:true
});



module.exports = mongoose.model('C2b',c2BSchema)

