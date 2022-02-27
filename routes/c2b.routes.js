const router = require('express').Router()

const C2b = require('../models/c2B.model');
const mpesaAuth = require('../middlewares/mpesaAuth.middleware');


router.route('/initiate').get((req, res) => {
  C2b.find()
    .then(transactions => res.json(transactions))
    .catch(err => res.status(400).json('Error: ' + err));
});

// register c2b
router.route('/register').get(mpesaAuth, (req, res) => {
  const url = process.env.C2B_REGISTER_URL
  const auth = "Bearer" + " " + req.access_token
  const confirmationUrl = process.env.C2B_CONFIRMATION_URL
  const validationUrl = process.env.C2B_VALIDATION_URL
  const c2bShortCode = process.env.C2B_SHORT_CODE

  request(
    {
      url,
      method: "POST",
      headers: {
        "Authorization": auth
      },
      json: {
        "ShortCode": `${c2bShortCode}`,
        "ResponseType": "Completed",
        "ConfirmationURL": `${confirmationUrl}`,
        "ValidationURL": `${validationUrl}`

      }
    },
    function (error, response, body) {
      if (error) { console.log(error) }
      res.status(200).json(body)
    }
  )

});


router.route('/confirmation').post((req,res)=>{
    console.log("-----------Confirmation--------------")
    const mpesa_response = req.body;
    console.log(mpesa_response)
});

router.route('/validation').post((req,res)=>{
  console.log("-----------Confirmation--------------")
  const mpesa_response = req.body;
  console.log(mpesa_response)
});


module.exports = router;