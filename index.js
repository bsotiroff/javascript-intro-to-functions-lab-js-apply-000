
function shout(str) {
  return str.toUpperCase();
}

function whisper(str) {
  return str.toLowerCase();
}

function logShout(str) {
  console.log(str.toUpperCase());
}

function logWhisper(str) {
  console.log(str.toLowerCase());
}

function sayHiToGrandma(str) {
  if(str === "I love you, Grandma.") return "I love you, too.";
  if(str[0] === str[0].toLowerCase) return "I can\'t hear you!";
  if(str[0] === str[0].toUpperCase) return 'YES INDEED!';
}
