const request = require('request')

const forecast = (latitude, longitude,address, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=fa9769c8a467857dbe7a21b3638b8b7e&query=${latitude},${longitude}` //&units=f    f=faranheit, m=celcius, s=kelvin

    request({ url, json: true }, (error, res) => {
        if (error) {
            console.log('Unable to connect to weather service!');
            callback('Unable to connect to weather service!', undefined)
        } else if (res.body.error) {
            console.log('Unable to find location!');
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, res.body.current.weather_descriptions[0]+'. Its currently '+res.body.current.temperature+' degree out and '+res.body.current.precip+'% chance of rain in '+address)
        }
    })
}

module.exports = forecast