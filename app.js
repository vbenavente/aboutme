
console.log('About Me');

var userName = prompt('What is your name?');
console.log('Hi ' + userName + ' Do you want to play a game?');
alert('Hi ' + userName + ', Welcome to my page!');

var playGame = prompt('Do you want to play a game? yes or no');
console.log('You actually do not have a choice! ' + playGame);
if((playGame.toLowerCase() === 'yes') || (playGame.toLowerCase() === 'y')) {
  alert('Great ' + userName + ' lets play!');
} else if((playGame.toLowerCase() === 'no') || (playGame.toLowerCase() === 'n')) {
  alert('Ok ' + userName + ' I will just ask you a few questions?');
} else {console.log('You cannot even answer a simple question?');
  alert('I did not understand your response');
}

var manyLanguages = prompt('Do you think I have studied more than 5 languages? yes or no');
console.log('I have actually studied 9 languages ' + manyLanguages);
if((manyLanguages.toLowerCase() === 'yes') || (manyLanguages.toLowerCase() === 'y')) {
  alert('That is correct ' + userName);
} else if ((manyLanguages.toLowerCase() === 'no') || (manyLanguages.toLowerCase() === 'n')) {
  alert ('Nope you are wrong ' + userName);
} else {console.log('You cannot even answer a simple question?');
  alert('I did not understand your response');
}

var manyCountries = prompt('Do you think I have been to more than 5 countries? yes or no');
console.log('I have been to more than 5 countries ' + manyCountries);
if((manyCountries.toLowerCase() === 'yes') || (manyCountries.toLowerCase() === 'y')) {
  alert('That is correct ' + userName);
} else if ((manyCountries.toLowerCase() === 'no') || (manyCountries.toLowerCase() === 'n')) {
  alert ('Nope you are wrong ' + userName);
} else {console.log('You cannot even answer a simple question?');
  alert('I did not understand your response');
}

var birthYear = prompt('Do you think I was born in the 70s? yes or no');
console.log('I was born in 1981 ' + birthYear);
if((birthYear.toLowerCase() === 'yes') || (birthYear.toLowerCase() === 'y')) {
  alert('Nope you are wrong ' + userName);
} else if ((birthYear.toLowerCase() === 'no') || (birthYear.toLowerCase() === 'n')) {
  alert ('That is correct ' + userName);
} else {console.log('You cannot even answer a simple question?');
  alert('I did not understand your response');
}

var birthCity = prompt('Do you think I was born in Asheville, NC? yes or no');
console.log('I was actually born in Raleigh, NC ' + birthCity);
if((birthCity.toLowerCase() === 'yes') || (birthCity.toLowerCase() === 'y')) {
  alert('That is correct ' + userName);
} else if ((birthCity.toLowerCase() === 'no') || (birthCity.toLowerCase() === 'n')) {
  alert ('Nope you are wrong ' + userName);
} else {console.log('You cannot even answer a simple question?');
  alert('I did not understand your response');
}
