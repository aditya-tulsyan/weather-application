// console.log('Starting')

// setTimeout(() => {
//     console.log('2 second timer')
// }, 2000) 

// console.log('Stopping')

const request = require('request')
const url1 = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Giridih.json?access_token=pk.eyJ1IjoiYWRpZ3JkIiwiYSI6ImNra2ZxdXJzYzA3OW0ycHF0bjFyNm5rdTIifQ.zgY-XkDbOEOS4q-z4Wo5aw&limit=1'
const url = 'http://api.weatherstack.com/current?access_key=b637bdc804fc3eb0d79ba34f33540758&query=24.175038,%2086.314479'

request({ url: url1, json: true}, (error, response) => {
    if(error){
        console.log('Unable to connect to location servcie')
    }

    else if(response.body.features.length === 0){
        console.log('Unable to find location')
    }
    else{
        const lat = response.body.features[0].center[0]
        const long = response.body.features[0].center[1]
        console.log('Lat is: ' + lat + 'long is: ' + long)
    }
    // console.log(response.body.features[0])

})


request({ url: url, json: true}, (error, response) => {
    // console.log(response.body.current)
    if(error){
        console.log('Unable to connect to weather service');
    }

    else if(response.body.error){
        console.log('Unable to find location')
    }

    else{
        console.log('Current temp is: ' + response.body.current.temperature + ', feels like: ' + response.body.current.feelslike)
    }
})

// MapBox API Token: pk.eyJ1IjoiYWRpZ3JkIiwiYSI6ImNra2ZxdXJzYzA3OW0ycHF0bjFyNm5rdTIifQ.zgY-XkDbOEOS4q-z4Wo5aw