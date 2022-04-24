// const axios = require('axios');
// axios({
//     method:'GET',
//     url:'https://api.openweathermap.org/geo/1.0/direct?q=Udupi&limit=5&appid=2765d1c9de7c5d050497317cea0c624b',
// })
// .then((response)=>{
//     console.log(response.data);
// })
// .catch((error)=>{
//     console.log(error);
// })
// (--OR--)
// axios.get('https://api.openweathermap.org/geo/1.0/direct?q=Udupi&limit=5&appid=2765d1c9de7c5d050497317cea0c624b')
// .then((response)=>{
//     console.log(response.data);
// })

//41. using node core module
// const http = require('https'); //rename url to https://....
const http = require('http');
const url='http://api.openweathermap.org/geo/1.0/direct?q=Udupi&limit=5&appid=2765d1c9de7c5d050497317cea0c624b';

const request = http.request(url, (response)=>{
    let data = '';

    response.on('data',(chunk)=>{
        data = data + chunk.toString();
    });

    response.on('end',()=>{
        const body = JSON.parse(data);
        console.log(body);
    })
})

request.on('error',(error)=>{
    console.log(error);
})

request.end();