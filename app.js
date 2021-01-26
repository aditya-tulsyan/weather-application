// console.log('Starting')

// setTimeout(() => {
//     console.log('2 second timer')
// }, 2000) 

// console.log('Stopping')

const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=b637bdc804fc3eb0d79ba34f33540758&query=24.175038,%2086.314479'

request({ url: url}, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.current)
})