export class Helper {

    constructor() {

    }

    convertDateToUnixTimeStamp(dateObj) {
        const date = new Date(dateObj.Y, dateObj.M, dateObj.D, dateObj.h, dateObj.m, dateObj.s);
        const timestamp = date.getTime();
        const timestamp10digits= String(timestamp).substring(0, 10);
        console.log(`${dateObj.Y}-${dateObj.M}-${dateObj.D} ${dateObj.h}:${dateObj.m}:${dateObj.s} to ${timestamp10digits}`);

        return timestamp10digits;
    }
}
