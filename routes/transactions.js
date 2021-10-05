const router = require('express').Router()
const request = require('request')

const Transaction = require('../models/transaction.model');

router.route('/').get((req,res)=>{
    Transaction.find()
    .then(transactions => res.json(transactions))
    .catch(err => res.status(400).json('Error: '+err));
});

router.route('/add').post((req,res)=>{
    const transaction = req.body;
    const newTransaction = new Transaction(transaction);

    newTransaction.save()
    .then(()=> res.json('User added!'))
    .catch(err=> res.status(400).json('Error: '+ err));
});

module.exports = router;