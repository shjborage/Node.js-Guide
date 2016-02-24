/**
 * Created by shihaijie on 2/24/16.
 */

var fs = require('fs');
var data = fs.readFileSync('helloworld.js', 'utf-8');
console.log(data);
console.log('end of sync I/O');