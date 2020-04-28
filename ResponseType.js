/**
 * Mock APIs responses
 */

/**
 * Matrix cards data
 */

matrix_payload = {
  stats: {
    new: 34567, //Both old and new values can be in range of [30k-35k]
    old: 30235,
  },
  daily_users: {
    new: 895, //Both old and new values can be in range of [600-1400]
    old: 1250,
  },
  monthly_users: {
    new: 52410, //Both old and new values can be in range of [40k-55k]
    old: 40331,
  },
  requests_per_minute: {
    new: 652, //Both old and new values can be in range of [500-1000]
    old: 956,
  },
};

/**
 * Charting data
 */

charting_payload = {
  sales: [
    { title: "In-Store Sales", magnitude: 30 }, // All magnitude vales can be in range of [15-30]
    { title: "Mail-Order Sales", magnitude: 20 },
    { title: "Download Sales", magnitude: 16 },
  ],
  stats: [
    { date: "timestamp", magnitude: 42010 }, // All magnitude values can be in range of [20k-90k]
    { date: "timestamp", magnitude: 75203 },
    { date: "timestamp", magnitude: 42000 },
    { date: "timestamp", magnitude: 12000 },
    { date: "timestamp", magnitude: 85001 },
  ],
  revenue: [
    { year: 2010, magnitude: 75203 }, // All magnitude values can be in range of [20k-90k]
    { year: 2011, magnitude: 42000 },
    { year: 2012, magnitude: 12000 },
    { year: 2013, magnitude: 85001 },
    { year: 2014, magnitude: 85001 },
    { year: 2015, magnitude: 85001 },
  ],
};

/**
 * List data
 */

//  This can hold data upto 100 users
users_payload = [
  {
    avatar: "image_url/any",
    name: "Louis Hansen",
    role: "Web Designer",
    phone: "+12 3456 789",
    location: "USA",
    date: "timestamp",
  },
];
