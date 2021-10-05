const router = require('express').Router()

const C2b = require('../models/c2B.model');


router.route('/').get((req,res)=>{
    C2b.find()
    .then(transactions => res.json(transactions))
    .catch(err => res.status(400).json('Error: '+err));
});

// router.route('/register').post((req,res)=>{
//     const payload = req.body;
//     const newC2b = new C2b(payload);

//     newC2b.save()
//     .then(()=> res.json('c2b success!'))
//     .catch(err=> res.status(400).json('Error: '+ err));
// });



// register c2b
router.route('/register').get(mpesaAuth, (req,res)=>{
    const url = "https://sandbox.safaricom.co.ke/mpesa/c2b/v1/registerurl"
    const auth = "Bearer"+" "+req.access_token
    request(
      {
        url,
        method: "POST",
        headers: {
          "Authorization": auth
        },
        json: {
            "ShortCode": "600982",
            "ResponseType": "Completed",
            "ConfirmationURL": "http://192.168.0.102:3000/confirmation",
            "ValidationURL": "http://192.168.0.102:3000/validation"

        }
      },
      function(error,response,body){
        if(error){console.log(error)}
        // console.log(response.body)
        res.status(200).json(body)

        // response

        // {
        //   OriginatorCoversationID: '7603-31746121-1',
        //   ResponseCode: '0',
        //   ResponseDescription: 'success'
        // }

      }
    )

});


module.exports = router;