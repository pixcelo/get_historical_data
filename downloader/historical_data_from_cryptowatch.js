import fetch from 'node-fetch';
// https://docs.cryptowat.ch/rest-api/markets/ohlc
166983183
1669831830000
// Unix timestamp e.g. 1481663244
// const after = new Date(2022, 11, 1, 3, 10, 30).getTime();
//const before = new Date(2022, 11, 1, 3, 20, 30).getTime();
const after = {Y: 2022, M: 10, D: 1, h: 3, m: 10, s: 30}

const convertDateToUnixTimeStamp = (dateObj) => {
    const date = new Date(dateObj.Y, dateObj.M, dateObj.D, dateObj.h, dateObj.m, dateObj.s);
    const timestamp = date.getTime();
    const timestamp10digits= String(timestamp).substring(0, 10);
    console.log(`${dateObj.Y}-${dateObj.M}-${dateObj.D} ${dateObj.h}:${dateObj.m}:${dateObj.s} to ${timestamp10digits}`);

    return timestamp10digits;
}

const symbol = 'BTCUSDT';
const url = `https://api.cryptowat.ch/markets/bybit/${symbol}/ohlc?after=${convertDateToUnixTimeStamp(after)}`;

(async () => {
  try {
    const response = await fetch(url);
    console.log(response);
    const json = await response.json();
    console.log(json.result);
  } catch (error) {
    console.log(error);
  }
})();
