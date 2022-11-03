import fs from 'fs';

// __dirname
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read json
const buffer = fs.readFileSync(`${__dirname}/1669918530.json`);
const json = JSON.parse(buffer);
console.log(json);
