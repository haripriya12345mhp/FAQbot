const express = require('express');
const routes=require('./routes');
const bodyParser = require('body-parser');
const headers = require('./headers');
const api= express();
api.use(bodyParser.urlencoded({extended:true}));
api.use(bodyParser.json());
api.use(headers);
api.use('/',routes);
api.listen(3001,()=>{
    console.log('Listening on port 3001');
});