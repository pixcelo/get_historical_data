import fs from 'fs';
import fetch from 'node-fetch';
import { Helper } from './helper.js';
const helper = new Helper();

// https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#klinecandlestick-data

// https://api.binance.com
// GET /api/v3/klines
// https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1m

// const startTime = {Y: 2022, M: 11, D: 2, h: 3, m: 15, s: 30}
// const start = helper.convertDateToUnixTimeStamp(startTime);

// const endTime = {Y: 2022, M: 11, D: 2, h: 3, m: 20, s: 30}
// const end = helper.convertDateToUnixTimeStamp(endTime);

// const url = `https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1m&startTime=${start}`; //&endTime=${end}`;

// (async () => {
//   try {
//     const response = await fetch(url);
//     const json = await response.json();
//     console.log(json);
//     console.log(json.origin);
//   } catch (error) {
//     console.log(error);
//   }
// })();

// 0,1,2 とインデックスが進むと時間も進む（0が一番若い）
// 1502942400000 ~ 1502972399999 (2017/08/17 13:00:00 ~ 2017/08/17 21:19:59)
(async () => {
    try {
        for (let i = 0; i < 3; i++) {
            let baseTime = {Y: 2022, M: 11, D: 2, h: 3, m: 0, s: 30}
            let start = helper.convertDateToUnixTimeStamp(baseTime, i);
            const symbol = 'BTCUSDT';
            const interval = '1m';
            const url = `https://api.binance.com/api/v3/klines?symbol=${symbol}&interval=${interval}&startTime=${start}`;
            const response = await fetch(url);
            //const json = await response.json();
            //console.log(json);
            const resArry = await response.json();
            const obj = JSON.stringify(resArry);
            fs.writeFileSync(`./json/${start}.json`, obj);
        }
    } catch (error) {
        console.log(error);
    }
})();
