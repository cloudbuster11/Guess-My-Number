'use strict';

// document.querySelector('.message').textContent = 'Rätt svar!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = secretNumber;

// Meddelande funktionen
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

let score = 20;
let highscore = 0;

//Number gör om string till number.
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  // Ingen input!
  if (!guess) {
    //document.querySelector('.message').textContent = 'Ingen siffra!';
    displayMessage('Ingen siffra!');

    //Rätt Gissat!
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'Rätt gissat!';
    displayMessage('Rätt gissat! :)');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //Gissat fel
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? 'För hög siffra!' : 'För låg siffra!';
      displayMessage(
        guess > secretNumber ? 'För hög siffra!' : 'För låg siffra!'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //document.querySelector('.message').textContent = 'GAME OVER!';
      displayMessage('GAME OVER!');
      document.querySelector('.score').textContent = 0;
    }
  }

  //   //Gissat för högt
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'För hög siffra!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'GAME OVER!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  //   //Gissat för lågt
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'För låg siffra!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'GAME OVER!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

// Spela igen knappen
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  //document.querySelector('.message').textContent = 'Börja gissa...';
  displayMessage('Börja gissa...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
