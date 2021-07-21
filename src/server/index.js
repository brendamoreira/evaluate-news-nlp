const dotenv = require('dotenv');
dotenv.config();

var path = require('path');
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');
const { request } = require('http');

const app = express();

const apiKey = process.env.API_KEY;
app.use(express.json());
app.use(express.static('dist'));

const cors = require('cors');
app.use(cors());

const fetch = require('node-fetch');

const FormData = require('form-data');

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

app.post('/callAPI', async function (req, res){
    console.log(req.body)
    const url = req.body.formText;
    const formData = new FormData();
    formData.append('key', apiKey);
    formData.append('url', url);
    formData.append('lang', 'auto');
    const request = await fetch('https://api.meaningcloud.com/sentiment-2.1', { method: 'POST', body: formData, redirect: 'follow'});
    try{
        const response = await request.json()
        console.log(response)
        res.send(response)
    }
    catch(error){
        console.log(error);
    }
})