module.exports = function() {
  var fs = require('fs');
  fs.readdir(process.argv[2], function done(err, dirContents) {
    for (var i = 0; i < dirContents.length; i++) {
      var content = dirContents[i];
      var ext = content.split('.');
      if (ext[1] === process.argv[3]) {
        console.log(dirContents[i]);
      }
    }
  });
};
//Not done
