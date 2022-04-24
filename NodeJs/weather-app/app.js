const request=  require('postman-request');
const chalk = require('chalk');

const weatherStack_url = 'http://api.weatherstack.com/current?access_key=fa9769c8a467857dbe7a21b3638b8b7e&query=Udupi' //&units=f    f=faranheit, m=celcius, s=kelvin
const openWeather_geocode_url ='https://api.openweathermap.org/geo/1.0/direct?q=Udupi&limit=5&appid=2765d1c9de7c5d050497317cea0c624b'

// request({'url':weatherStack_url, json:true},(error, response)=>{
//     console.log(response.body.current);
// })

// request({'url':openWeather_geocode_url, json:true},(error, response)=>{
//     console.log(response.body[0].lat);
//     console.log(response.body[0].lon);
// })

//36. Http request
// request({'url':openWeather_geocode_url, json:true},(error, response)=>{
//     if(error){
//         console.log('unable to connect to openweather.com');
//     }else if(response.body.cod){
//         console.log('unable to find location');
//     }else{
//         request({'url':`http://api.weatherstack.com/current?access_key=fa9769c8a467857dbe7a21b3638b8b7e&query=${response.body[0].lat},${response.body[0].lon}`, json:true},(er, res)=>{
//             if(er){
//                 console.log('unable to connect to openweather.com');
//             }else if(res.body.error){
//                 console.log('unable to find location');
//             }else{
//                 console.log(res.body.current.weather_descriptions[0]+'. Its currently '+res.body.current.temperature+' degree out and '+res.body.current.precip+'% chance of rain.');
//             }
//         })
//     }
// })

//37. standardize the code.
const getWeather = require('./utils/geocode');
const forecast = require('./utils/forecast');

const cmd = process.argv;
const place = cmd[2];

if(!place){
    console.log(chalk.red('please provide place name in command line argument!!!'));
}else{
    getWeather(place,forecast)
}




