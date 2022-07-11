'use strict';
let ansNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
//show ans number
//document.querySelector('.number').textContent = ansNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('❌No Number❌');
  }
  //Win
  else if (guess === ansNumber && score > 0) {
    displayMessage('❤💚💙Correct!!');

    document.querySelector('.number').textContent = ansNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    if (highscore < score) {
      document.querySelector('.highscore').textContent = score;
      highscore = score;
    }
  } else if (guess !== ansNumber && score > 0) {
    document.querySelector('.message').textContent =
      guess > ansNumber ? 'Too High' : 'Too Low';
    score--;
    document.querySelector('.score').textContent = score;

    if (score === 0) {
      displayMessage('You Lose');
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  ansNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').textContent = '';
  displayMessage('Start Guessing...');
});
