# Conduit

![Conduit Logo](./assets/banner.png)

Conduit is an API that has been integrated with Safaricom’s Mpesa Daraja API.

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/pmutua/conduit/master/LICENSE)

## Download and Installation

To begin using this template, choose one of the following options to get started:

* Clone the repo: `git clone https://github.com/pmutua/conduit.git`
* [Fork, Clone, or Download on GitHub](https://github.com/pmutua/conduit)

## Usage

To run locally, create a `.env` in the root of the project and add the following environment variables:

```bash
YOUR_APP_CONSUMER_KEY="add consumer key here"
YOUR_APP_CONSUMER_SECRET="add consumer secret here"
MONGODB_URI="mongodb+srv://root:<password>@<clustername>.euctx.mongodb.net/<databasename>?retryWrites=true&w=majority"
MPESA_PASS_KEY="add mpesa passkey here"
LIPA_NA_MPESA_CALLBACK_URL="add callback url here"
LIPA_NA_MPESA_SHORT_CODE="add mpesa short code here"
LIPA_NA_MPESA_PARTYB=add mpesa party b here
LIPA_NA_MPESA_STK_PUSH_REQUEST_URL="add  mpesa stk push request url here"
C2B_SHORT_CODE="add c2b shortcode"
C2B_CONFIRMATION_URL="http://localhost:3000/c2b/confirmation"
C2B_VALIDATION_URL="http://localhost:3000/c2b/validation"
C2B_REGISTER_URL="add c2b register url"
DARAJA_ACCESS_TOKEN_URL="add daraja access token url"
```

Then in your terminal where your project is run:

```bash
    npm install
    npm start
```

The API is accessible at `http://localhost:3000`

## Bugs and Issues

Have a bug or an issue with this API? [Open a new issue](https://github.com/pmutua/conduit/issues) here on GitHub.

## About

An API that has been integrated with Safaricom’s Mpesa Daraja API. The API features include ability to send payment prompts on the customers phone to the customer’s MPESA registered phone number requesting them to enter an MPESA pin to authorize and complete payment. Another feature is ability to make payment requests from Client to Business (C2B).

Conduit was created by and is maintained by **[Philip Mutua](https://twitter.com/itsphilipmutua)**.

* <https://twitter.com/itsphilipmutua>
* <https://github.com/pmutua>

## Technologies Used

* JavaScript
* Node.js
* Express.js
* MongoDB

## Copyright and License

Code released under the [MIT](https://github.com/pmutua/conduit/blob/master/LICENSE) license.

## Future Plans

Looking forward to make more improvements on C2B and Lipa na Mpesa modules.

## Author

[Philip Mutua](https://twitter.com/itsphilipmutua)
