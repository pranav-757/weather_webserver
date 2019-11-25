const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoicHJhbmF2Zzc1NyIsImEiOiJjazNjc21scGwwb2R5M2hwOHlsN2ZnMDllIn0.ys28BfGx-TaSi7MDeCNxXQ&limit=1'

    request({ url, json: true }, (error, res, body) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (res.statusCode !=200 || body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode