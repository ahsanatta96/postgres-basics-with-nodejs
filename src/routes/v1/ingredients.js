const router = require("express").Router();
const {
  get_all_ingredients,
  get_ingredient_by_type,
  search_ingredients,
} = require("../../controllers/ingredients");

router.get("/", get_all_ingredients);
router.get("/type", get_ingredient_by_type);
router.get("/search", search_ingredients);

module.exports = router;
