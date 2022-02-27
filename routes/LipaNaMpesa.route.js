const router = require('express').Router()
const request = require('request')
const LipaNaMpesaTransaction = require('../models/LipaNaMpesaTransaction.model');
const mpesaAuth = require('../middlewares/mpesaAuth.middleware');


router.route('/').get((req, res) => {
  LipaNaMpesaTransaction.find()
    .then(transactions => res.json(transactions))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/callback').post((req, res) => {
  console.log(req.body)
  const transaction = req.body;
  const newTransaction = new LipaNaMpesaTransaction(transaction);

  newTransaction.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});



router.route('/stk').post(mpesaAuth, (req, res) => {
  const url = process.env.LIPA_NA_MPESA_STK_PUSH_REQUEST_URL
  const auth = "Bearer " + req.access_token
  const _shortCode = process.env.LIPA_NA_MPESA_SHORT_CODE
  const _passKey = process.env.MPESA_PASS_KEY
  const timeStamp = (new Date()).toISOString().replace(/[^0-9]/g, '').slice(0, -3)
  const password = Buffer.from(`${_shortCode}${_passKey}${timeStamp}`).toString('base64')
  const partyB = process.env.LIPA_NA_MPESA_PARTYB
  const callBackUrl = process.env.LIPA_NA_MPESA_CALLBACK_URL

  request(
    {
      url,
      method: "POST",
      headers: {
        Authorization: auth
      },
      json: {
        "BusinessShortCode": `${_shortCode}`,
        "Password": password,
        "Timestamp": timeStamp,
        "TransactionType": "CustomerPayBillOnline",
        "Amount": `${req.body.Amount}`,
        "PartyA": `${req.body.PhoneNumber}`,
        "PartyB": `${partyB}`,
        "PhoneNumber": `${req.body.PhoneNumber}`,
        "CallBackURL": `${callBackUrl}`,
        "AccountReference": `${req.body.AccountReference}`,
        "TransactionDesc": `${req.body.TransactionDesc}`

      }
    },
    function (error, response, body) {
      if (error) { res.status(400).json(error) }
      res.status(200).json(body)

    }

  )
})

module.exports = router;