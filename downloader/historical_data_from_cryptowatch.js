import fs from 'fs';
import fetch from 'node-fetch';
import { Helper } from './helper.js';
const helper = new Helper();

// Unix timestamp e.g. 1481663244
// https://docs.cryptowat.ch/rest-api/markets/ohlc

(async () => {
  try {
      let candles = [];

      for (let i = 0; i < 3; i++) {
        let baseTime = {Y: 2022, M: 10, D: 1, h: 3, m: 0, s: 30}
        let after = helper.convertDateToUnixTimeStamp(baseTime, i);
        const symbol = 'BTCUSDT';
        const url = `https://api.cryptowat.ch/markets/bybit/${symbol}/ohlc?after=${after}`;
        const response = await fetch(url);
        const json = await response.json();
        const arry = json["result"]["60"];

        // Merge OHLC Candles array
        candles = candles.concat(arry);
      }

      const data = JSON.stringify(candles);
      fs.writeFile(`./json/candles.json`, data, (err) => {
            if (err) throw err;
            console.log('success');
      });
  } catch (error) {
      console.log(error);
  }
})();
