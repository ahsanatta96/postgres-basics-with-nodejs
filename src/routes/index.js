const ingredients = require("./v1/ingredients");

const v1_routes = (app) => {
  app.use("/api/ingredients", ingredients);
};

module.exports = v1_routes;
