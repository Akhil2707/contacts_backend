const express = require('express');
const app = express();
const dotenv = require('dotenv').config();

app.use(express.json());
app.use('/api/contacts', require('./routes/contactRoutes'));



const PORT = process.env.PORT || 5000;

app.listen(PORT,(err)=>{
    console.log(`Server is running on port ${PORT}`);
})