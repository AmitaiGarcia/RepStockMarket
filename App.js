// lets me use express
const express = require('express');
const app = express();
// listening on port 3000
app.listen(3000, () => console.log('listening on port 3000'));
app.use(express.static('public'));
let company_name = 'IBM'
const api_url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${company_name}&apikey=HNTGT5T6X1C9TCS4`

function findMax(data) {

    let max = 0;
    for (index in data) {

        let obj = data[index];

        if (parseInt(obj['2. high']) > max) {
            max = obj['2. high'];
        }
    }
    return max;
}

function findMin(data) {
    // used extremely large number
    let min = 1000000;
    for (index in data) {

        let obj = data[index];

        if (parseInt(obj['2. high']) < min) {
            min = obj['2. high'];
        }
    }
    return min;
}

async function getData() {
    const response = await fetch(api_url);
    const data = await response.json();
    console.log(findMax(data["Time Series (Daily)"]));
}

getData();


