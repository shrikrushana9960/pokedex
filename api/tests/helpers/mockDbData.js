const Fav = require("../../src/models/Fav");

jest.setTimeout(100000);
const createFavourite = () => {
  const favourite = new Fav({
    name: "Test",
    email: "test@gmail.com",
    url: "https://dummy.com/test",
  });
  Fav.create(favourite);
};

module.exports = {
  createFavourite,
};
