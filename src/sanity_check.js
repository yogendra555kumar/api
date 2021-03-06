const fs = require('fs');
const fetch = require('node-fetch');
const moment = require('moment-timezone');
const data = require('../tmp/data.json');
const data_prev = require('../tmp/data_prev.json');

var total = data.statewise[0];
var err = false;
if (total.deltaconfirmed > 20000) {
    process.stderr.write("Delta confirmed is greater than 20k");
    err = true;
}

if (err) {
    process.stderr.write("Sanity check failed. Not committing!");
    process.exit(1);
}
else {
    console.log("No known data errors. Proceeding to commit!");
}
