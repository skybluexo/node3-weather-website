const request = require('request')

const forecast = (latitude,longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=dc31c5cc0e94e5e5e00067f1fa19e71c&query='+ encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude) + '&units=f'
    //'http://api.weatherstack.com/current?access_key=dc31c5cc0e94e5e5e00067f1fa19e71c&query='+ encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude) + '&units=f'

    request({url, json: true}, (error, {body})=>{
        if(error){
            callback('Unable to connect to weather service!',undefined)
        } else if(body.error){
            callback('Unable to find location',undefined)
        } else {
            callback(undefined, 
                body.current.weather_descriptions[0]+ ' It is currently ' + body.current.temperature 
                + ' degrees out. It feels like '+body.current.feelslike+' degrees out.  There is a ' + body.current.precip + '% chance of rain.  Humidity is '
                + body.current.humidity + ' degrees.'

            )
        }
    })
}

module.exports = forecast

