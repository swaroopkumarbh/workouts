"use strict";

var floorNumber = function floorNumber(no) {
  return Math.floor(no);
};

var number = floorNumber(23.45);

var concatStr = function concatStr(number) {
  return console.log("The rounded number is ".concat(number));
};

concatStr(number);

var sliceArray = function sliceArray(array, start, end) {
  var arr = [];

  for (var i = start; i < end; i++) {
    arr.push(array[i]);
  }

  console.log(arr);
};

var array = [1, 2, 3, 4, 5];
sliceArray(array, 2, 5);

var foreach = function foreach(array) {
  array.forEach(function (value) {
    console.log(value);
  });
};

foreach(array);

var lowerCase = function lowerCase(str) {
  return str.toLowerCase();
};

var str = lowerCase("HELLO");
console.log(str);