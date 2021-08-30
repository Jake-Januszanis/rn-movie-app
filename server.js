const express = require('express');
const app = express();
const PORT = process.env.PORT || 2000;
const axios = require('axios')
require('dotenv').config();

app.get('/', function(req,res) {
    res.send('Server Found')
})





app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
