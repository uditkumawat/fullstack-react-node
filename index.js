"use strict";

const express = require('express');
const app = express();

app.get('/',(req,res)=>{

    let udit = "udit";
    res.send({hi:'there'});
});

const PORT = process.env.PORT || 5000;

app.listen(PORT);