//Task 1

//Write function to show person's friends. Your answer should be the text of story
// example nicholas friends with uugnaa and jeje

function libIt() {
  const storyDiv = document.getElementById("story");
  const person = document.getElementById("person").value;
  const friend1 = document.getElementById("friend1").value;
  const friend2 = document.getElementById("friend2").value;
  storyDiv.innerHTML = person + " friends with a " + friend1 + "and " + friend2;
}

var libButton = document.getElementById("lib-button");
libButton.addEventListener("click", libIt);
// Task 2
//  write function find square number of square input, it should console log the answer,
// for example "The result of squaring the number  4 is  16" and  display the answer in in resolution div
function squareNumber(num) {
  const squaredNumber = num * num;
  console.log(
    "The result of squaring the number " + num + " is " + squaredNumber
  );
  return squaredNumber;
}
//  write function find half number of half input, it should console log the answer,
// for example "Half of  30  is  15" and  display the answer in in resolution div
function halfOf(num) {
  const half = num / 2;
  console.log("Half of " + num + " is " + half);
  return half;
}
//  write function find given percent of given whole number , it should console log the answer,
// for example "5 is  20%% of 25" and  display the answer in in resolution div
function percentOf(num1, num2) {
  const percent = (num1 / num2) * 100;
  console.log(num1 + " is " + percent + "% of " + num2);
  return percent;
}
//  write function find area circle of given radius , it should console log the answer,
// for example "The area of circle with radius 10 is 314.1592653589793" and  display the answer in in resolution div
function areaOfCircle(radius) {
  const area = Math.PI * squareNumber(radius);
  console.log("The area of circle with radius " + radius + " is " + area);
  return area;
}

const squareButton = document.getElementById("square-button");
squareButton.addEventListener("click", function () {
  const num = document.getElementById("square-input").value;
  document.getElementById("solution").innerHTML = squareNumber(num);
});

const halfButton = document.getElementById("half-button");
halfButton.addEventListener("click", function () {
  const num = document.getElementById("half-input").value;
  document.getElementById("solution").innerHTML = halfOf(num);
});

const percentButton = document.getElementById("percent-button");
percentButton.addEventListener("click", function () {
  const num1 = document.getElementById("percent1-input").value;
  const num2 = document.getElementById("percent2-input").value;
  document.getElementById("solution").innerHTML = percentOf(num1, num2);
});

const areaButton = document.getElementById("area-button");
areaButton.addEventListener("click", function () {
  const num = document.getElementById("area-input").value;
  document.getElementById("solution").innerHTML = areaOfCircle(num);
});
//Task 3
// write a function to change the statusReport. when click on Take off button, status should be "Houston! We have liftoff!".
// when click on abort mission button, it will alert "Aborting the mission" and status should be "We are aborting the mission"
const missionAbort = document.getElementById("abortMission");
const button = document.getElementById("liftoffButton");
const paragraph = document.getElementById("statusReport");

button.addEventListener("click", (event) => {
  paragraph.innerHTML = "Houston! We have liftoff!";
});

missionAbort.addEventListener("mouseout", function (event) {
  paragraph.innerHTML = "We are aborting a mission!";
  alert("Are you sure you want to abort the mission?");
});

// Task 4
const KEYCODES = {
  f: 70,
  enter: 13,
  left: 37,
  up: 38,
  right: 39,
  down: 40,
};

const bmoState = {
  speed: 100,
  showing: true,
  facingRight: true,
  top: 0,
  left: 0,
};
//  when teacher button is clicked, broadcast an alert saying "i like event."

var tchrButton = document.querySelector("#teacherButton");

var clickHandler = function () {
  alert("i like event!");
};

tchrButton.addEventListener("click", clickHandler);

//  when student button is clicked, make bmo disappear (use the opacity property)

var studentButton = document.querySelector("#studentButton"),
  bmoEl = document.querySelector("#bmo");

studentButton.addEventListener("click", function () {
  // change bmo's opacity to 0
  if (bmoState.showing) {
    // if bmo is showing, hide her
    bmoEl.style.opacity = "0";
    bmoState.showing = false;
  } else {
    // if she is hiding, show her
    bmoEl.style.opacity = "1";
    bmoState.showing = true;
  }
});

// me: when the space bar is pressed, bmo should flip from right to left, then inside that function add movement to bmo if you press any of up and down, left,right, it will move that direction
//hint event has keyCode property if the key code equals to KEYCODES up property, it will decrease top as same speed as bmoState speed.
//bmoState.top -= bmoState.speed;
// bmoEl.style.top = bmoState.top + "px";

// you: make the flipping action toggle as well.

// me: up arrow moves bmo up by 10px (toPx)
// hint: bmo is absolutely positioned, so you can use the top, right, bottom & left properties at will.

// you: give bmo 4 directions of movement

var moveBmo = function (eventObject) {
  // check whether space was pressed
  if (eventObject.keyCode === KEYCODES.enter) {
    // if so, flip bmo
    if (bmoState.facingRight) {
      bmoEl.style.transform = "rotateY(180deg)";
      bmoState.facingRight = false;
    } else {
      bmoEl.style.transform = "rotateY(0deg)";
      bmoState.facingRight = true;
    }
  }

  // handle up movement

  if (eventObject.keyCode === KEYCODES.up) {
    bmoState.top -= bmoState.speed;
    bmoEl.style.top = bmoState.top + "px";
  }
  if (eventObject.keyCode === KEYCODES.down) {
    bmoState.top += bmoState.speed;
    bmoEl.style.top = bmoState.top + "px";
  }
  if (eventObject.keyCode === KEYCODES.left) {
    bmoState.left -= bmoState.speed;
    bmoEl.style.left = bmoState.left + "px";
  }
  if (eventObject.keyCode === KEYCODES.right) {
    bmoState.left += bmoState.speed;
    bmoEl.style.left = bmoState.left + "px";
  }
};

window.addEventListener("keydown", moveBmo);
