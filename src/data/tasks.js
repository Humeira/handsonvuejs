export let tasks = [
  "Learn Vue.js",
  "Bake a chocolate cake",
  "Sleep",
  "Binge watch your favourite show",
  "Learn how to do a cartwheel",
  "Do a headstand",
  "Write a poem",
  "Write a blog post",
  "Write down your goals for the next 3 years",
  "Make a YouTube video; you could even earn money from it",
  "KonMari your life",
  "Try not to think of pandas. It's harder than you think it is",
  "Say a word continuously until it loses its meaning",
  "Say the alphabet backward.",
  "See how many marshmallows you can put in your mouth",
  "Go fishing",
  "Learn Morse code",
  "Do the macarena till you can't stand on your feet",
  "Watch Game of Thrones",
  "Medidate",
  "Sort your wardrobe by colour code",
  "Go skyding",
  "Go windsurfing",
  "Practice your shower singing",
  "Try to lick your nose"
];

export const random = function(param) {
  return param[Math.floor(Math.random() * param.length)];
};

export const getRandom = function() {
  return random(tasks);
};

export const getTime = function() {
  const dt = new Date();
  const min = (dt.getMinutes() < 10 ? "0" : "") + dt.getMinutes();
  const hours = dt.getHours();
  return hours + ":" + min;
};
