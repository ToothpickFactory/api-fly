const errRes  = require('../../util/errRes');
const BlueModule  = require("../../modules/BlueModule/");


// Routes
module.exports = function(app){
  app.get('/blues', getBlues)
  app.post('/blues', postBlue)
  app.get('/blues/:id', getBlue)
  app.put('/blues/:id', putBlue)
  app.delete('/blues/:id', deleteBlue)
};

/******************************
* HANDLERS
******************************/
function getBlues(req, res){
  BlueModule.getBlues()
    .then(blues => res.send(blues))
    .catch(err =>  errRes(err, res))
}

function postBlue(req, res){
  let blue = req.body;
  BlueModule.postBlue(blue)
    .then(blueId => res.send(blueId))
    .catch(err =>  errRes(err, res))
}

function getBlue(req, res){
  let blueId = req.params.id;
  BlueModule.getBlue(blueId)
    .then(blue => res.send(blue))
    .catch(err => errRes(err, res))
}

function putBlue(req, res){
  let blueId = req.params.id;
  let updateObj = req.body;
  BlueModule.putBlue(blueId, updateObj)
    .then(updateRes => res.send(updateRes))
    .catch(err => errRes(err, res))
}

function deleteBlue(req, res){
  let blueId = req.params.id;
  BlueModule.deleteBlue(blueId)
    .then(deleteRes => res.send(deleteRes))
    .catch(err => errRes(err, res))
}
