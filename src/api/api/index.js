const apiRequestMiddle = require("../../middleware/apiRequestMiddle");
const ApiModule  = require("../../modules/ApiModule");


// Routes
module.exports = function(app){
  app.get('/api/:id/*', apiRequestMiddle, getItem);
  app.post('/api/:id/*', apiRequestMiddle, postItem)
};

/******************************
* HANDLERS
******************************/
function getItem(req, res){
  let path = req.params[0].split("/");
  let end = path[path.length - 1];
  let blueId = req.params.id;
  let collection = req.blue._collection;

  if(end === collection){
    res.send("Still working on it!")
  }else{
    ApiModule.getItem(blueId, collection, end)
      .then(item => res.send(item));
  }
}

function postItem(req, res){
  let blue = req.blue;
  let item = req.body;
  let blueId = req.params.id;
  ApiModule.postItem(blue, item, blueId)
    .then(id => res.send(id))
    .catch(err => res.status(400).send(err))
}
function putObject(){}
function deleteObject(){}
