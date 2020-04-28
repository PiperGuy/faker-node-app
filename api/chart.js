const faker = require("faker");
const { randomNumberWithSum, randomNumber } = require("../helper/randomNumber");

const getData = (res) => {
  const statsNumber = randomNumber(7, 5);
  const revenueNumber = randomNumber(7, 5);
  const SalesValues = randomNumberWithSum(100, 3);

  const chartData = {
    sales: [
      { title: "In-Store Sales", magnitude: SalesValues[0] },
      { title: "Mail-Order Sales", magnitude: SalesValues[1] },
      { title: "Download Sales", magnitude: SalesValues[2] },
    ],
    stats: [],
    revenue: [],
  };

  for (counter = 1; counter <= statsNumber; counter++) {
    chartData.stats.push({
      date: faker.date.past(),
      magnitude: randomNumber(90000, 20000),
    });
  }

  for (counter = 1; counter <= revenueNumber; counter++) {
    chartData.revenue.push({
      year: 2010 + counter,
      magnitude: randomNumber(90000, 20000),
    });
  }

  if (
    chartData.sales.length &&
    chartData.stats.length &&
    chartData.revenue.length
  ) {
    res.json(chartData);
  } else {
    res.status(400).json("Not found");
  }
};

module.exports = { getData };
