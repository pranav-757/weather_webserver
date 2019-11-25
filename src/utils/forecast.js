const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/b0d2d7af832cc889bb9456c021526e3b/' + latitude + ',' + longitude

    request({ url, json: true }, (error, res, body) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (res.statusCode != 200 || body.error) {
            callback('Unable to find location: ' + body.error, undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. There is a ' + body.currently.precipProbability + '% chance of rain.')
        }
    })
}

module.exports = forecast