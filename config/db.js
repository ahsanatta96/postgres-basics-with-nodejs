const pg = require("pg");

const pool = new pg.Pool({
  user: "postgres",
  password: "lol",
  host: "localhost",
  database: "recipeguru",
  port: 5432,
});

module.exports = { pool };
