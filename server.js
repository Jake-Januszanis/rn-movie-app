const express = require('express');
const app = express();
const fetch = require('node-fetch')

app.use(express.urlencoded({extended: true}))


require('dotenv').config();
const PORT = process.env.PORT || 2000;
const key = process.env.API_KEY;

app.get('/', function(req,res) {
    res.send('Server Found')
})

app.get('/search/:genres/:providers', function(req,res) {
    const {genres, providers} = req.params;
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&include_adult=false&with_genres=${genres}&with_watch_providers=${providers}&sort_by=vote_average.desc&vote_count.gte=500&with_original_language=en&watch_region=US&without_genres=16, 10402`)
    .then(res => res.json())
    .then(data => res.send(data))  
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
