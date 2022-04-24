const request = require('postman-request');

const forecast = (error,data)=>{

    if(error){
        console.log(error);
    }else{
        const weatherStack_url2 = `http://api.weatherstack.com/current?access_key=fa9769c8a467857dbe7a21b3638b8b7e&query=${data.lat},${data.lon}` //&units=f    f=faranheit, m=celcius, s=kelvin

        request({'url':weatherStack_url2, json:true},(er, res)=>{

        if(er){
            console.log('unable to connect to openweather.com');
        }else if(res.body.error || res.body.length==0){
            console.log('unable to find location');
        }else{
            console.log(res.body.current.weather_descriptions[0]+'. Its currently '+res.body.current.temperature+' degree out and '+res.body.current.precip+'% chance of rain in '+data.place);
        }
    })
    }
}

module.exports=forecast