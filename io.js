var fs = require('fs');
var str = fs.readFileSync(process.argv[2]);
str_toString = str.toString();
split = str_toString.split('\n');
console.log(split.length-1);
