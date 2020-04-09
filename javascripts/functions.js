//jshint esversion: 6

let arrAvg = (arr) => {
  let sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum / arr.length;
};

let arrMax = (numbers) => {
  let currentMaximum = -Inifinity;
  numbers.forEach(function(number){
    if (number > currentMaximum) {
      currentMaximum = number;
    }
  });
  return currentMaximum;
}
