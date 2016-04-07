/**
 * Created by shihaijie on 4/7/16.
 */

var myModule = require('./module');
myModule.setName('Eric');

var helloModule = require('./module');
helloModule.setName('Snail');

myModule.sayHello();