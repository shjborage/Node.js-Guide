/**
 * Created by shihaijie on 2/24/16.
 */

var fs = require('fs');
fs.readFile('helloworld.js', 'utf-8', function(err, data) {
  if (err) {
    console.error(err);
  } else {
    console.log(data);
  }
});
console.log('end of async I/O');