const request = require('request');


const url = `https://api.darksky.net/forecast/4d7ffcfb9aa09045e05c305fd697c5cf/37.8267,-122.4233`;


request({ url, json: true }, (error, response) => {
    console.log(response.body.currently)
})