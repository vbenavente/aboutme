
console.log('About Me');

var answerTracker = [];
var gameTracker = [];
var totalQuestions = 0;

var ques1 = document.getElementById('ans1');

var userName = prompt('What is your name?');
console.log('Hi ' + userName + ' Do you want to play a game?');
alert('Hi ' + userName + ', Welcome to my page!');

var gameAns = function() {
  var playGame = prompt('Do you want to play a game? yes or no');
  totalQuestions++;
  console.log('You actually do not have a choice! ' + playGame);
  if((playGame.toLowerCase() === 'yes') || (playGame.toLowerCase() === 'y')) {
    ques1.textContent = 'Great ' + userName + ' let\'s play!';
    answerTracker.push(playGame);
    console.log('playGame push: ' + playGame);
  } else if((playGame.toLowerCase() === 'no') || (playGame.toLowerCase() === 'n')) {
    ques1.textContent = 'Ok ' + userName + ' I will just ask you a few questions';
  } else {console.log('You cannot even answer a simple question2?');
    ques1.textContent = 'I did not understand your response';
  }
};
gameAns();

var ques2 = document.getElementById('ans2');

var langAns = function() {
  var manyLanguages = prompt('Do you think I have studied more than 5 languages? yes or no');
  totalQuestions++;
  console.log('I have actually studied 9 languages ' + manyLanguages);
  if((manyLanguages.toLowerCase() === 'yes') || (manyLanguages.toLowerCase() === 'y')) {
    ques2.textContent = 'That is correct ' + userName;
    answerTracker.push(manyLanguages);
    console.log('manyLanguages push: ' + manyLanguages);
  } else if ((manyLanguages.toLowerCase() === 'no') || (manyLanguages.toLowerCase() === 'n')) {
    ques2.textContent = 'Nope you are wrong ' + userName;
  } else {console.log('You cannot even answer a simple question3?');
    ques2.textContent = 'I did not understand your response';
  }
};
langAns();

var ques3 = document.getElementById('ans3');

var manyCountries = prompt('Do you think I have been to more than 5 countries? yes or no');
totalQuestions++;
console.log('I have been to more than 5 countries ' + manyCountries);
if((manyCountries.toLowerCase() === 'yes') || (manyCountries.toLowerCase() === 'y')) {
  ques3.textContent = 'That is correct ' + userName;
  answerTracker.push(manyCountries);
  console.log('manyCountries push: ' + manyCountries);
} else if ((manyCountries.toLowerCase() === 'no') || (manyCountries.toLowerCase() === 'n')) {
  ques3.textContent = 'Nope you are wrong ' + userName;
} else {console.log('You cannot even answer a simple question4?');
  ques3.textContent = 'I did not understand your response';
}

var ques4 = document.getElementById('ans4');

var birthYear = prompt('Do you think I was born in the 70s? yes or no');
totalQuestions++;
console.log('I was born in 1981 ' + birthYear);
if((birthYear.toLowerCase() === 'yes') || (birthYear.toLowerCase() === 'y')) {
  ques4.textContent = 'Nope you are wrong ' + userName;
} else if ((birthYear.toLowerCase() === 'no') || (birthYear.toLowerCase() === 'n')) {
  ques4.textContent = 'That is correct ' + userName;
  answerTracker.push(birthYear);
  console.log('birthYear push: ' + birthYear);
} else {console.log('You cannot even answer a simple question5?');
  ques4.textContent = 'I did not understand your response';
}

var ques5 = document.getElementById('ans5');

var birthCity = prompt('Do you think I was born in Asheville, NC? yes or no');
totalQuestions++;
console.log('I was actually born in Raleigh, NC ' + birthCity);
if((birthCity.toLowerCase() === 'no') || (birthCity.toLowerCase() === 'n')) {
  ques5.textContent = 'That is correct ' + userName + '. You get a bonus question!';
  answerTracker.push(birthCity);
  console.log('birthCity push: ' + birthCity);

  var ques6 = document.getElementById('ans6');

  var bonusQuestion = prompt('Did I ever live in another country? yes or no');
  totalQuestions++;
  if((bonusQuestion.toLowerCase() === 'yes') || (bonusQuestion.toLowerCase() === 'y')) {
    ques6.textContent = 'That is correct ' + userName;
    answerTracker.push(bonusQuestion);
    console.log('bonusQuestion push: ' + bonusQuestion);
  } else if ((bonusQuestion.toLowerCase() === 'no') || (bonusQuestion.toLowerCase() === 'n')) {
    ques6.textContent = 'Nope you are wrong ' + userName;
  } else {console.log('You cannot even answer a simple question6?');
    ques6.textContent = 'I did not understand your response';
  }
} else if ((birthCity.toLowerCase() === 'yes') || (birthCity.toLowerCase() === 'y')) {
  ques5.textContent = 'Nope you are wrong ' + userName;
} else {console.log('You cannot even answer a simple question5?');
  ques5.textContent = 'I did not understand your response';
}

totalQuestions++;
for(var i = 0; (i < 4 && stalloneMovies !== 33); i++) {
  var ques7 = document.getElementById('ans7');
  var stalloneMovies = prompt('How many Sylvester Stallone movies do you think I\'ve seen?');
  stalloneMovies = parseInt(stalloneMovies);
  console.log('stalloneMovies: ' + stalloneMovies);
  if(stalloneMovies < 33){
    console.log('Too high');
    ques7.textContent = 'Your guess is too low! Try again';
  } else if(stalloneMovies > 33){
    console.log('Too low');
    ques7.textContent = 'Your guess is too high! Try again!';
  } else if(isNaN(stalloneMovies)){
    console.log('Not a number');
    ques7.textContent = 'That is not a number try again!';
  }
  else {
    console.log('finally!');
    ques7.textContent = 'That is correct!';
    answerTracker.push(stalloneMovies);
    console.log('stalloneMovies push: ' + stalloneMovies);
  }
}

alert('You got ' + answerTracker.length + ' out of ' + totalQuestions + ' correct ' + userName + ' Not bad!');

var ques8 = document.getElementById('ans8');

var doYouMind = prompt('Will you tell me your top 5 favorite games? yes or no');
ques8.textContent = ans8;
if((doYouMind.toLowerCase() === 'yes') || (doYouMind.toLowerCase() === 'y')) {
  for(var i = 0; i < 5; i++) {
    var favoriteGames = prompt('List one of your top 5 favorite games?');
    console.log('favoriteGames: ' + favoriteGames);
    gameTracker.push(favoriteGames);
    console.log('no error here');
  }
} else {
  confirm('Even after all we just shared?!');
}

console.log(gameTracker);
