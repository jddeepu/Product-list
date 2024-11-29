const express= require('express');
const mongoose=require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express()
app.use(express.json());
app.use(cors());
const PORT=process.env.port || 8080;
mongoose.connect(process.env.MANGODB_URL)
.then(()=>{
    console.log('mangoos db connect')
})
.catch((err)=>{
    console.log(err)
})
app.listen(PORT,()=>{console.log(`app listening on ${PORT}`);})