import fs from 'fs';
import fetch from 'node-fetch';
import { Helper } from './helper.js';
const helper = new Helper();

// Unix timestamp e.g. 1481663244
// const after = new Date(2022, 11, 1, 3, 10, 30).getTime();
//const before = new Date(2022, 11, 1, 3, 20, 30).getTime();
//const after = {Y: 2022, M: 10, D: 1, h: 3, m: 10, s: 30}

// https://docs.cryptowat.ch/rest-api/markets/ohlc
//const symbol = 'BTCUSDT';
// const url = `https://api.cryptowat.ch/markets/bybit/${symbol}/ohlc?after=${helper.convertDateToUnixTimeStamp(after)}`;

// (async () => {
//   try {
//     const response = await fetch(url);
//     //console.log(response);
//     const json = await response.json();
//     console.log(json.result);
//   } catch (error) {
//     console.log(error);
//   }
// })();

// 若い方が昔、
(async () => {
  try {
      for (let i = 0; i < 3; i++) {
        let baseTime = {Y: 2022, M: 10, D: 1, h: 3, m: 0, s: 30}
        let after = helper.convertDateToUnixTimeStamp(baseTime, i);
        const symbol = 'BTCUSDT';
        const url = `https://api.cryptowat.ch/markets/bybit/${symbol}/ohlc?after=${after}`;
        console.log(url);
        const response = await fetch(url);
        const json = await response.json();
        const obj = JSON.stringify(json["result"]["60"]);
        fs.writeFile(`./json/${after}.json`, obj, (err) => {
            if (err) throw err;
            console.log('success');
        });
      }
  } catch (error) {
      console.log(error);
  }
})();
