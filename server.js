const express = require('express');

// const path = require('path');  //MIGHT NOT NEED THIS
//const uuid = require('uuid');
const fs = require('fs');

const htmlRoute = require('./routes/pageRoute');
const apiRoute = require('./routes/noteApiRoute');

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
app.use(express.json());

app.use('/',htmlRoute);
app.use('/api',apiRoute);

app.listen(PORT, () => console.log(`App listen on port ${PORT}`));