const express = require('express');
const categoriesController = require('./controllers/categoriesController');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './views/categories');

app.get('/', (req, res) => res.redirect('/categories'));
app.get('/categories', categoriesController.listCategories);

app.listen(3000, () => console.log('listening here'));