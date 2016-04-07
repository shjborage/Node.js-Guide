/**
 * Created by shihaijie on 4/7/16.
 */

function Hello() {
  var name;

  this.setName = function (thyName) {
    name = thyName;
  };

  this.sayHello = function() {
    console.log('Hello ' + name);
  };
};

//exports.Hello = Hello;
module.exports = Hello;