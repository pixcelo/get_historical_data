import fs from 'fs';

export class Helper {

    constructor() {

    }

    // dt = {Y: 2022, M: 10, D: 1, h: 3, m: 10, s: 30}
    // convertDateToUnixTimeStamp(dt) {
    //     const date = new Date(dt.Y, dt.M, dt.D, dt.h, dt.m, dt.s);
    //     const timestamp = date.getTime();
    //     const timestamp10digits= String(timestamp).substring(0, 10);
    //     console.log(`${dt.Y}-${dt.M}-${dt.D} ${dt.h}:${dt.m}:${dt.s} to ${timestamp10digits}`);

    //     return timestamp10digits;
    // }

    // ( 500件 * (1分 == 60000ミリ秒) ) / 1回 => 30000000
    convertDateToUnixTimeStamp(dt, n) {
        const ADD_NUMBER = 30000000;
        const date = new Date(dt.Y, dt.M, dt.D, dt.h, dt.m, dt.s);
        let timestamp = date.getTime();
        timestamp = timestamp + (n * ADD_NUMBER);
        const timestamp10digits = String(timestamp).substring(0, 10);
        console.log(`${dt.Y}-${dt.M}-${dt.D} ${dt.h}:${dt.m}:${dt.s} to ${timestamp10digits}`);

        return timestamp10digits;
    }
}
