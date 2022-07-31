const os = require("os");
const path = require("path");

console.log(os.freemem());
console.log(os.totalmem());
console.log(os.homedir());

console.log(path.sep);
console.log(path.extname(__filename));
console.log(path.parse(__filename));