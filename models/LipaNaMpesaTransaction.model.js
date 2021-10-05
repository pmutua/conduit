


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
    timestamps:true
});



module.exports = mongoose.model('LipaNaMpesaTransaction',lipaNaMpesaTransactionSchema)



// {    
//     "Body": {        
//        "stkCallback": {            
//           "MerchantRequestID": "29115-34620561-1",            
//           "CheckoutRequestID": "ws_CO_191220191020363925",            
//           "ResultCode": 0,            
//           "ResultDesc": "The service request is processed successfully.",            
//           "CallbackMetadata": {                
//              "Item": [{                        
//                 "Name": "Amount",                        
//                 "Value": 1.00                    
//              },                    
//              {                        
//                 "Name": "MpesaReceiptNumber",                        
//                 "Value": "NLJ7RT61SV"                    
//              },                    
//              {                        
//                 "Name": "TransactionDate",                        
//                 "Value": 20191219102115                    
//              },                    
//              {                        
//                 "Name": "PhoneNumber",                        
//                 "Value": 254708374149                    
//              }]            
//           }        
//        }    
//     }
//  }