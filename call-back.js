// const request = require('request')
// const loc = "Giridih"
// const geoUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + loc + '.json?access_token=pk.eyJ1IjoiYWRpZ3JkIiwiYSI6ImNra2ZxdXJzYzA3OW0ycHF0bjFyNm5rdTIifQ.zgY-XkDbOEOS4q-z4Wo5aw&limit=1'
// console.log(geoUrl)
// const geocode = (location, callback) => {
//     const geoUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + location + '.json?access_token=pk.eyJ1IjoiYWRpZ3JkIiwiYSI6ImNra2ZxdXJzYzA3OW0ycHF0bjFyNm5rdTIifQ.zgY-XkDbOEOS4q-z4Wo5aw&limit=1'
//     callback(geoUrl)
// }

// geocode('Giridih', (url) => {
//     request({ url: url, json: true}, (error, response) => {
//         if(error){
//         console.log('Unable to connect to location servcie')
//         }

//         // else if(response.body.features.length === 0){
//         //     console.log('Unable to find location')
//         // }
//         else{
//             const lat = response.body.features[0].center[0]
//             const long = response.body.features[0].center[1]
//             console.log('Lat is: ' + lat + 'long is: ' + long)
//         }
//     })
// })

//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

const add = (a, b, callback) => {
    setTimeout(() => {
        callback(a+b)
    }, 2000)
}
add(1, 4, (sum) => {  
    console.log(sum) // Should print: 5
})
