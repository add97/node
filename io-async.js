var fs = require('fs');

function output() {
  fs.readFile(process.argv[2], function doneReading(err, fileContents) {
    toString = fileContents.toString();
    split = toString.split('\n');
    console.log(split.length-1);
  });
}

output();
