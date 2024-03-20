const express = require("express");
const v1_routes = require("./src/routes");

const app = express();

app.use(express.json());
v1_routes(app);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
