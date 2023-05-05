const NUMBER_OF_DIGITS = 6;

function randomAccount() {
  let number = '';
  for (let i = 0; i < NUMBER_OF_DIGITS; i++) {
    number += getRandomDigit();
  }
  return number;
}

function getRandomDigit() {
  return Math.floor(Math.random() * 10);
}

module.exports = randomAccount;
