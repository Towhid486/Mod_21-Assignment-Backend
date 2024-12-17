const express = require('express');
const rateLimit = require('express-rate-limit');
const mongoose = require('mongoose');

const xss = require('xss-clean');
const helmet = require('helmet');
const hpp = require('hpp');
const cors = require('cors');
const mongoSanitize = require('express-mongo-sanitize');

const cookieParser = require('cookie-parser');

const router = require('./src/routes/api');
const app = new express();

let DATABASE = "";
mongoose.connect(DATABASE,{autoIndex:true}).then((res) =>{
    console.log("Database Connected");
}).catch((err) =>{
    console.log(err)
})

app.use(cookieParser());
app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());

app.use(express.json({limit: '50mb'}))
app.use(express.urlencoded({limit: '50mb', extended: true}))

const limiter = rateLimit({windowMs: 15*60*1000, max:3000});
app.use(limiter);

app.set('etag', false);
app.use('/api/v1', router);

module.exports=app;