const Categories = require('../models/jokesCategories');

const listCategories = async (req, res) => {
  const categories = await Categories.getCategories();
  res.render('index', { categories });
};

module.exports = { listCategories };