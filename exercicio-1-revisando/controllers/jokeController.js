const Jokes = require('../model/joke');

const listJokes = async(req, res) => {
  const joke = await Jokes.getJokes();
  res.render('jokeView', { joke });
};

module.exports = { listJokes };