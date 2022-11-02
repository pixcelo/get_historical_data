import fetch from 'node-fetch';
// https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#klinecandlestick-data

// https://api.binance.com
// GET /api/v3/klines

//const url = 'https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1m';

const startTime = new Date(2022, 11, 2, 3, 15, 30).getTime();
//const unixTimestamp = date;
console.log(startTime);

const endTime = new Date(2022, 11, 2, 3, 20, 30).getTime();
//const unixTimestamp = date;
console.log(endTime);

const url = `https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1m&startTime=${startTime}&endTime=${endTime}`;

(async () => {
  try {
    const response = await fetch(url);
    const json = await response.json();
    console.log(json);
    console.log(json.origin);
  } catch (error) {
    console.log(error);
  }
})();
