const express = require('express');
const router = express.Router();
const createIntent = require('./createIntent');
router.get('/',(req,res)=>
res.json({greetings:"welcome to dialogflow api service"}));
module.exports=router;

router.post('/create-intent',createIntent);
