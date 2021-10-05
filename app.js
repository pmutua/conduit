
require('dotenv').config()
const cors = require('cors')
const express = require("express");
const app = express();
const request = require('request');
const docs = require('./docs');
const compression = require('compression')
const swaggerJsdoc =   require("swagger-jsdoc");
const  swaggerUI = require("swagger-ui-express");
require("./loaders/db.loader")(app);
require("./loaders/router.loader")(app);
const mpesaAuth = require('./middlewares/mpesaAuth.middleware');

app.use(cors());
app.use(require('morgan')('dev'));
app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(docs));
app.use(express.json());
app.use(compression());




// routes
app.get('/', (req,res) =>{
    res.send("Test")
})

app.get('/daraja_token',mpesaAuth,  (req,res) =>{
    // access token
    res.status(200).json({access_token: req.access_token})

})

app.post('/confirmation', (req,res)=>{
  console.log("-----------Confirmation--------------")
  const mpesa_response = req.body;
  console.log(mpesa_response)
})

app.post('/validation', (req,res)=>{
  console.log("-----------Validation--------------")
  const mpesa_response = req.body;
  console.log(mpesa_response)
})

app.post('/AccountBalance/queue/', (req,res)=>{
  console.log("-----------Confirmation--------------")
  const mpesa_response = req.body;
  console.log(mpesa_response)
})

app.post('/AccountBalance/result/', (req,res)=>{
  console.log("-----------Validation--------------")
  const mpesa_response = req.body;
  console.log(mpesa_response)
})

app.get('/simulate',mpesaAuth, (req,res)=>{
  const url = "https://sandbox.safaricom.co.ke/mpesa/c2b/v1/simulate"
  const auth = 'Bearer'+" "+req.access_token

  request(
    {url,
    method: "POST",
    headers: {
      "Authorization": auth,
      "Content-Type": "application/json"
    },
    json: {
      "CommandID": "CustomerPayBillOnline",
      "Amount":"10",
      "Msisdn":"254708374149",
      "BillRefNumber":"00000",
      "ShortCode":"600982"
   }
  },function(error,response,body){
    if (error){console.log(error)}
    res.status(200).json(body)
    // response
    // {"OriginatorCoversationID":"26895-4573346-1","ResponseCode":"0","ResponseDescription":"Accept the service request successfully."}
  }
  )
})

// balance
app.get('/balance', mpesaAuth,(req,res)=>{
  const url = "https://sandbox.safaricom.co.ke/mpesa/accountbalance/v1/query"
  const auth = "Bearer "+ req.access_token

  request(
    {url,
    method: "POST",
    headers:{
      "Authorization": auth
    },
    json: {
        "Initiator": "testapi",
        "SecurityCredential": process.env.MPESA_SECURITY_CREDENTIAL,
        "CommandID": "AccountBalance",
        "PartyA": 600996,
        "IdentifierType": "4",
        "Remarks": "balance",
        "QueueTimeOutURL": "http://192.168.0.102:3000/AccountBalance/queue/",
        "ResultURL": "http://192.168.0.102:3000/AccountBalance/result/",
      }
    },
    function(error,response,body){
      if(error){console.log(error)}
      // console.log(response.body)
      res.status(200).json(body)

      // response

      // {
      //   "OriginatorConversationID": "103536-32639893-1",
      //   "ConversationID": "AG_20210928_00006d688ee668df3786",
      //   "ResponseCode": "0",
      //   "ResponseDescription": "Accept the service request successfully."
      // }

    }
  )
})



// listen
app.listen(3000, (err,live) => {
    if(err){
        console.log(err)
    }
    console.log("Server running on port 3000")
});
