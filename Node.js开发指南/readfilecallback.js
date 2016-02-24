/**
 * Created by shihaijie on 2/24/16.
 */

//function readFileCallback(err, data) {
//  if (err) {
//    console.error(err);
//  } else {
//    console.log(data);
//  }
//}
//
var fs = require('fs');
//fs.readFile('helloworld.js', 'utf-8', readFileCallback);


fs.readFile('helloworld.js', 'utf-8', (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log(data);
  }
});

console.log('end of async I/O');