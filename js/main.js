var colour;
var creature;
var adjective;
var verb;
var story;

var storyA = function () {

  document.write('After snacking on ' + adjective + ' treats, the ' + colour + ' bellied ' + creature + ' ' + verb + ' for hours.');
};

var storyB = function () {
  document.write('Ameilia ' + verb + ' through the ' + adjective + ' ' + colour + ' nebula escaping the space ' +  creature + '.');
};

var storyC = function () {
  document.write('Jackson chose his ' + adjective + ', ' + colour + ' ' + creature + 'and ' + verb + 'it to the table knowing he won.');
};

alert('Let’s make a story together!');

colour = prompt('Enter a colour');
creature = prompt('What\'s your favourite creature?');
adjective = prompt('choose an adjective');
verb = prompt('choose a past tense verb (ran, kissed etc)');
story = prompt('Which story would you like?\nEnter the letter below:\na)snacking\nb)escaping\nc)winning');

if (story == 'a' || story == 'A') {
  storyA();
} else if (story == 'b' || story == 'B') {
  storyB();
} else if (story == 'c' || story == 'C') {
  storyC();
} else {
  document.write('You are no fun.');
};

/*
switch (story) {
  case 'a':
  case 'A':
    break;
  case 'b':
    break;
    "//n"
    "Let's make a story together!"
    "A colour"
    "A creature"
    "An adjective"
    "A past tense verb"
}
*/
