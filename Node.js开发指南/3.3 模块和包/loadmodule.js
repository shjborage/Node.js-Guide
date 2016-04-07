/**
 * Created by shihaijie on 4/7/16.
 */

var myModule = require('./module');
myModule.setName('Eric');

var helloModule = require('./module');
helloModule.setName('Snail');

myModule.sayHello();


//var Hello = require('./singleObject').Hello;
var Hello = require('./singleObject');

var hello = new Hello();

hello.setName('A');
hello.sayHello();