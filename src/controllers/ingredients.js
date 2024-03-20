const { pool } = require("../../config/db");

// Get All Ingredients
const get_all_ingredients = async (req, res) => {
  try {
    const { rows } = await pool.query("SELECT * FROM ingredients");
    res.json(rows);
  } catch (error) {
    console.error("Error executing query:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Get an Ingredient by Type
const get_ingredient_by_type = async (req, res) => {
  try {
    const { type } = req.query;

    const { rows } = await pool.query(
      "SELECT * FROM ingredients WHERE type = $1",
      [type]
    );

    res.status(200).json(rows);
  } catch (error) {
    console.log("Error executing query:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Search Ingredients
const search_ingredients = async (req, res) => {
  try {
    const { searchItem } = req.query;

    const params = [];
    params.push(`%${searchItem}%`);

    const { rows } = await pool.query(
      `SELECT * FROM ingredients WHERE CONCAT(title, type) ILIKE $1`,
      params
    );

    res.status(200).json(rows);
  } catch (error) {
    console.log("Error executing query:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  get_all_ingredients,
  get_ingredient_by_type,
  search_ingredients,
};
