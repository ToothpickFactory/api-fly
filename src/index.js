const express = require('express');
const app			= express();

const recipes = require('../Recipes.json');

let db = require('../db.json');


app.get('/', function (req, res) {
  res.send(recipes)
})

app.get('/recipes/:id', function (req, res) {
  let recipeId = req.params.id;
  let recipe = recipes[recipeId];

  res.send(recipe);
})

app.get('/recipes/:id/*', function (req, res) {
  let recipeId = req.params.id;
	let path = req.params[0].split("/");
  let recipe = recipes[recipeId];

  let validPath = validatePath(recipe, path);
  let dbRes = getData(db, path);

  res.send(dbRes);
})


function validatePath(recipe, paths, index = 0){
  let key = paths[index];
  let nextRecipe = recipe._type === "List" ? recipe._list : recipe[key];
  let newIndex = index + 1;
  return paths[newIndex] ? validatePath(nextRecipe, paths, newIndex) : nextRecipe;
}

function getData(db, paths, index = 0){
  let key = paths[index];
  let dbRes = db[key];
  let newIndex = index + 1;
  return paths[newIndex] ? getData(dbRes, paths, newIndex) : dbRes;
}



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
