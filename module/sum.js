const superHero = require("./module-caching");
console.log(superHero.getName());
superHero.setName("Batman");
console.log(superHero.getName());

const newHero = require("./module-caching");
console.log(newHero.getName());
