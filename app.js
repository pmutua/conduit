const express = require("express");
const  request = require('request');
const app = express();

require('dotenv').config()

// console.log(process.env);



//routes 
app.get('/', (re,res) =>{
    res.send("Test")
})

app.get('access_token', (req,res) =>{
    // access token 
    consumer_key = process.env.YOUR_APP_CONSUMER_KEY,
    consumer_secret = process.env.YOUR_APP_CONSUMER_SECRET,
    url = "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials"
    auth = "Basic " + new Buffer(consumer_key + ":" + consumer_secret).toString("base64");
  
    request(
      {
        url : url,
        headers : {
          "Authorization" : auth
        }
      },
      function (error, response, body) {
        // TODO: Use the body object to extract OAuth access token
        if (error){
            console.log(error)
        }else{
            res.status(200).json(body)
        }
      }
    )
})






//listen 
app.listen(3000, (err,live) => {
    if(err){
        console.log(err)
    }
    console.log("Server running on port 3000")
});
