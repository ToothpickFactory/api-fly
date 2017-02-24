const express = require("express");
const path = require('path');

// Routes
module.exports = function(app){
  app.use('/', express.static(path.join(__dirname, '../../public')));
};

/******************************
* HANDLERS
******************************/
function servePublic(req, res){
  let path = req.params[0].split("/");
  let recipeId = req.params.id;
  ApiModule.getObject(recipeId, path)
    .then(obj => res.send(obj));
}
