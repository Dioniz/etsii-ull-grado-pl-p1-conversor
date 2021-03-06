"use strict"; // Use ECMAScript 5 strict mode in browsers that support it
function calculate() {
  var result;
  var original = document.getElementById("original");
  var temp = original.value;
  var regexp = /(^-?[0-9\.]+?.+(c|C|))/;
  
  var m = String(temp.match(regexp));

  if (m) {
    var num = m.match(/^-?[0-9\.]+/);
    var type = m.match(/[a-z]|[A-Z]/);
    converted.innerHTML = type;
    num = parseFloat(num);
    if (type == 'c' || type == 'C') {
      result = (num * 9/5)+32;
      //result = ..............................
    }
    else {
      result = (num - 32)*5/9;
     //result = ............................
    }
    converted.innerHTML = result;
  }
  else {
    converted.innerHTML = "ERROR! Try something like '-4.2C' instead";
  }
}
