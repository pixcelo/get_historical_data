// const csv = require('csv-parser');
// const fs = require('fs');
// const createClient = require('redis');

import csv from 'csv-parser';
import fs from 'fs';
import { createClient } from 'redis';

const client = new createClient();
await client.connect();

function insertData(filePath) {
    fs.createReadStream(filePath)
        .pipe(csv())
        .on('data', (data) => {
            client.set('date:' + data.date, JSON.stringify(data));
        })
        .on('end', () => {
            console.log('success: uploaded all data.');
            //client.disconnect();
    });
}

insertData('./downloader/Coinbase_BTCUSD_dailydata.csv');
