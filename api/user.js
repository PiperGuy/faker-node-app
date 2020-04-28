const faker = require("faker");

const getData = (res) => {
  const users = [];

  for (counter = 1; counter <= 100; counter++) {
    users.push({
      name: faker.name.findName(),
      role: faker.name.jobTitle(),
      phone: faker.phone.phoneNumberFormat(),
      date: faker.date.past(),
      location: faker.address.country(),
      avatar: faker.image.avatar(),
    });
  }
  if (users.length) {
    res.json(users);
  } else {
    res.status(400).json("Not found");
  }
};

module.exports = { getData };
