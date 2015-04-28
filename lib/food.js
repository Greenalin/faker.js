var faker = require('../index');

var _food = {

  dietType: function() {
      if (typeof faker.definitions.food.dietType.vegan !== "undefined" && typeof faker.definitions.food.vegetarian !== "undefined") {
          var rand = faker.random.number(1);
          if (rand === 0) {
              return faker.random.array_element(faker.locales[faker.locale].food.vegan)
          } else {
              return faker.random.array_element(faker.locales[faker.locale].food.vegetarian)
          }
      }
      return faker.random.array_element(faker.definitions.food.dietType)
  },

};

module.exports =  _food;

