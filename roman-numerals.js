const prompt = require("prompt-sync")({ sigint: true }); //npm install prompt-sync

//_____________________________SOLUTION_____________________________

/*
num = prompt("What is your number? ");
const toRoman = () => {

}
*/

//_____________________________EXERCISE_____________________________

let num = 3265;
let one = "I";
let v = "V";
let x = "X";
let l = "L";
let c = "C";
let d = "D";
let m = "M";
let str = num.toString();

let romUni = 0;
let romDiz = 0;
let romCen = 0;
let romMil = 0;

function getDigit(num, n) {
  // ==> this function gives us the digit at the n position of the number
  str = num.toString();
  return parseInt(str[n - 1]);
}

console.log(num);
console.log(str.length + " digits");

let last1 = getDigit(num, str.length);
let last2 = getDigit(num, str.length - 1);
let last3 = getDigit(num, str.length - 2);
let last4 = getDigit(num, str.length - 3);
// console.log(parseInt(last4));

// UNITES
if (isNaN(last1)) {
  romUni = "";
} else {
  if (last1 - 5 <= -2) {
    romUni = one.repeat(last1);
  } else if (last1 - 5 <= 0 && last1 - 5 > -2) {
    romUni = one.repeat(Math.abs(last1 - 5)) + v;
  } else if (last1 - 5 > 0 && last1 - 5 < 4) {
    romUni = v + one.repeat(Math.abs(last1 - 5));
  } else if (last1 - 5 >= 4) {
    romUni = one.repeat(Math.abs(10 - last1)) + x;
  } else {
    romUni = "bug unités";
  }
}

//DIZAINS
if (isNaN(last2)) {
  romDiz = "";
} else {
  if (last2 - 5 <= -2) {
    romDiz = x.repeat(last2);
  } else if (last2 - 5 <= 0 && last2 - 5 > -2) {
    romDiz = x.repeat(Math.abs(last2 - 5)) + l;
  } else if (last2 - 5 > 0 && last2 - 5 < 4) {
    romDiz = l + x.repeat(Math.abs(last2 - 5));
  } else if (last2 - 5 >= 4) {
    romDiz = x.repeat(Math.abs(10 - last2)) + c;
  } else {
    romDiz = "bug dizaines";
  }
}

//HUNDRED
if (isNaN(last3)) {
  romCen = "";
} else {
  if (last3 - 5 <= -2) {
    romCen = c.repeat(last3);
  } else if (last3 - 5 <= 0 && last3 - 5 > -2) {
    romCen = c.repeat(Math.abs(last3 - 5)) + d;
  } else if (last3 - 5 > 0 && last3 - 5 < 4) {
    romCen = d + c.repeat(Math.abs(last3 - 5));
  } else if (last3 - 5 >= 4) {
    romCen = c.repeat(Math.abs(10 - last3)) + m;
  } else {
    romCen = "bug centaines";
  }
}

//THOUSAND (max 3999)

if (isNaN(last4)) {
  romMil = "";
} else {
  if (last4 == NaN) {
    romMil = "//";
  } else if (last4 - 5 <= -2) {
    romMil = m.repeat(last4);
  } else if (last4 - 5 > -2) {
    romMil = "too big";
  }
}
console.log(romMil + romCen + romDiz + romUni);
