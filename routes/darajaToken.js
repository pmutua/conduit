const router = require('express').Router()


router.route('/token').get(mpesaAuth, (req,res)=>{
    res.status(200).json({ access_token: req.access_token })
});


module.exports = router;