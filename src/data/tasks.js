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
  "See how many marshmallows you can put in your mouth"
];

export const random = function(param) {
  return param[Math.floor(Math.random() * param.length)];
};

export const getRandom = function() {
  return random(tasks);
};

export const getTime = function() {
    return new Date();
};
