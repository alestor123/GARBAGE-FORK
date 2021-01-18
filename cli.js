#!/usr/bin/env node
var httpcat = require('./App'),
fs = require('fs');

(async () => {
var statscode = process.argv[2],
data = await httpcat(statscode)
fs.writeFileSync(`${statscode}.jpg`, data.buffer, (err) => {
if (err) throw err;
})})();

