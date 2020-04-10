// jshint esversion: 7

//define helper functions here

let rollDie = () => {
  return Math.floor(Math.random() * 6) + 1;
};

//Define a controller to handle the button click
let controller = () => {
  let target, die1, die2, rollCount = 0,
    die1URL, die2URL, imgElem, imgElem2, cheeryMessage;

  target = document.querySelector("input").value;
  console.log(target);

  do {
    //roll the die
    die1 = rollDie();
    die2 = rollDie();
    //increment roll counter
    rollCount = rollCount + 1;

    //log dice and the counter
    console.log("d1=", die1, "d2=", die2, "rolls=", rollCount);
  } while (die1 + die2 != target);

  //update dice images
  die1Url = `images/die${die1}.gif`;
  imgElem1 = document.querySelector("img");
  imgElem1.setAttribute("src", die1URL);

  die2Url = `images/die${die2}.gif`;
  imgElem2 = document.querySelectorAll("img")[1];
  imgElem2.setAttribute("src", die2URL);

  cheeryMessage = `You hit your number in ${rollCount} roll${(rollCount == 1)?"":"s"}!`;
  document.querySelector('div').innerHTML = cheeryMessage;

};

//Register the controller after the DOM is complete
window.addEventListener("load", () => {
  //select the button
  let button = document.querySelector("button");

  //register the click handler for the button
  button.addEventListener("click", controller);
});
