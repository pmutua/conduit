const request = require("request");

module.exports = function getDarajaAccessToken(req,res,next){
    consumer_key = process.env.YOUR_APP_CONSUMER_KEY,
    consumer_secret = process.env.YOUR_APP_CONSUMER_SECRET,
    url = "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials"
    auth = "Basic " + Buffer.from(consumer_key + ":" + consumer_secret,'utf-8').toString("base64");
  
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
            req.access_token = JSON.parse(body).access_token
            next()
        }
      }
    )

} 
