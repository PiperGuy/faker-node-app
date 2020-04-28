const { randomNumber } = require("../helper/randomNumber");

const getData = (res) => {
  const matrix = {
    stats: {
      new: randomNumber(35000, 30000), //Both old and new values can be in range of [30k-35k]
      old: randomNumber(35000, 30000),
    },
    daily_users: {
      new: randomNumber(1400, 600), //Both old and new values can be in range of [600-1400]
      old: randomNumber(1400, 600),
    },
    monthly_users: {
      new: randomNumber(55000, 40000), //Both old and new values can be in range of [40k-55k]
      old: randomNumber(55000, 40000),
    },
    requests_per_minute: {
      new: randomNumber(1000, 500), //Both old and new values can be in range of [500-1000]
      old: randomNumber(1000, 500),
    },
  };

  res.json(matrix);
};

module.exports = { getData };
