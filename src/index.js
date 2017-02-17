const express = require('express');
const app			= express();

const recipe = require('../Recipe.json');


app.get('/', function (req, res) {
  res.send(recipe)
})

app.get('/recipes/:id/*', function (req, res) {
	const params = req.params[0].split("/")

	// For loop over params and recipe

	console.log(params)
  res.send(recipe)
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})





// Translates to...
// /events
// /events/:id
// /events/:id/title
// /events/:id/startTime
// /events/:id/endTime
// /users
// /users/:id
// /users/:id/email
// /users/:id/alias
