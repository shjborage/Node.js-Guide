/**
 * Created by shihaijie on 4/7/16.
 */

var EventEmitter = require('events').EventEmitter;
var event = new EventEmitter();

event.on('some_event', function() {
  console.log('some_event occurred');
});

console.log('send event after 2s...');
setTimeout(function() {
  event.emit('some_event');
  console.log('done.');
}, 2000);
