<<<<<<< HEAD
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
};
=======
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
>>>>>>> 0c35d4cfc9262f6c3b4ab119d94eaf74c4f39bd2
