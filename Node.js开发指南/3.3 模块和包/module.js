/**
 * Created by shihaijie on 4/7/16.
 */

var name;

exports.setName = function (theName) {
  name = theName;
};

exports.sayHello = function () {
  console.log('Hello ' + name);
};