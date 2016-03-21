
console.log('About Me');

var answerTracker = [];
var gameTracker = [];
var totalQuestions = 0;

var userName = prompt('What is your name?');
console.log('Hi ' + userName + ' Do you want to play a game?');
alert('Hi ' + userName + ', Welcome to my page!');

var playGame = prompt('Do you want to play a game? yes or no');
totalQuestions++;
console.log('You actually do not have a choice! ' + playGame);
if((playGame.toLowerCase() === 'yes') || (playGame.toLowerCase() === 'y')) {
  alert('Great ' + userName + ' lets play!');
  answerTracker.push(playGame);
  console.log('playGame push: ' + playGame);
} else if((playGame.toLowerCase() === 'no') || (playGame.toLowerCase() === 'n')) {
  alert('Ok ' + userName + ' I will just ask you a few questions');
} else {console.log('You cannot even answer a simple question2?');
  alert('I did not understand your response');
}

var manyLanguages = prompt('Do you think I have studied more than 5 languages? yes or no');
totalQuestions++;
console.log('I have actually studied 9 languages ' + manyLanguages);
if((manyLanguages.toLowerCase() === 'yes') || (manyLanguages.toLowerCase() === 'y')) {
  alert('That is correct ' + userName);
  answerTracker.push(manyLanguages);
  console.log('manyLanguages push: ' + manyLanguages);
} else if ((manyLanguages.toLowerCase() === 'no') || (manyLanguages.toLowerCase() === 'n')) {
  alert ('Nope you are wrong ' + userName);
} else {console.log('You cannot even answer a simple question3?');
  alert('I did not understand your response');
}

var manyCountries = prompt('Do you think I have been to more than 5 countries? yes or no');
totalQuestions++;
console.log('I have been to more than 5 countries ' + manyCountries);
if((manyCountries.toLowerCase() === 'yes') || (manyCountries.toLowerCase() === 'y')) {
  alert('That is correct ' + userName);
  answerTracker.push(manyCountries);
  console.log('manyCountries push: ' + manyCountries);
} else if ((manyCountries.toLowerCase() === 'no') || (manyCountries.toLowerCase() === 'n')) {
  alert ('Nope you are wrong ' + userName);
} else {console.log('You cannot even answer a simple question4?');
  alert('I did not understand your response');
}

var birthYear = prompt('Do you think I was born in the 70s? yes or no');
totalQuestions++;
console.log('I was born in 1981 ' + birthYear);
if((birthYear.toLowerCase() === 'yes') || (birthYear.toLowerCase() === 'y')) {
  alert('Nope you are wrong ' + userName);
} else if ((birthYear.toLowerCase() === 'no') || (birthYear.toLowerCase() === 'n')) {
  alert ('That is correct ' + userName);
  answerTracker.push(birthYear);
  console.log('birthYear push: ' + birthYear);
} else {console.log('You cannot even answer a simple question5?');
  alert('I did not understand your response');
}

var birthCity = prompt('Do you think I was born in Asheville, NC? yes or no');
totalQuestions++;
console.log('I was actually born in Raleigh, NC ' + birthCity);
if((birthCity.toLowerCase() === 'no') || (birthCity.toLowerCase() === 'n')) {
  alert('That is correct ' + userName + '. You get a bonus question!');
  answerTracker.push(birthCity);
  console.log('birthCity push: ' + birthCity);
  var bonusQuestion = prompt('Did I ever live in another country? yes or no');
  totalQuestions++;
  if((bonusQuestion.toLowerCase() === 'yes') || (bonusQuestion.toLowerCase() === 'y')) {
    alert('That is correct ' + userName);
    answerTracker.push(bonusQuestion);
    console.log('bonusQuestion push: ' + bonusQuestion);
  } else if ((bonusQuestion.toLowerCase() === 'no') || (bonusQuestion.toLowerCase() === 'n')) {
    alert ('Nope you are wrong ' + userName);
  } else {console.log('You cannot even answer a simple question6?');
    alert('I did not understand your response');
  }
} else if ((birthCity.toLowerCase() === 'yes') || (birthCity.toLowerCase() === 'y')) {
  alert('Nope you are wrong ' + userName);
} else {console.log('You cannot even answer a simple question5?');
  alert('I did not understand your response');
}

totalQuestions++;
for(var i = 0; (i < 4 && stalloneMovies !== 33); i++) {
  var stalloneMovies = prompt('How many Sylvester Stallone movies do you think I\'ve seen?');
  stalloneMovies = parseInt(stalloneMovies);
  console.log('stalloneMovies: ' + stalloneMovies);
  if(stalloneMovies < 33){
    console.log('Too high');
    alert('Your guess is too low! Try again');
  } else if(stalloneMovies > 33){
    console.log('Too low');
    alert('Your guess is too high! Try again!');
  } else if(isNaN(stalloneMovies)){
    console.log('Not a number');
    alert('That is not a number try again!');
  }
  else {
    console.log('finally!');
    alert('That is correct!');
    answerTracker.push(stalloneMovies);
    console.log('stalloneMovies push: ' + stalloneMovies);
  }
}

alert('You got ' + answerTracker.length + ' out of ' + totalQuestions + ' correct ' + userName + ' Not bad!');

var doYouMind = prompt('Will you tell me your top 5 favorite games? yes or no');
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
