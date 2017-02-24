const BlueModule = require("../modules/BlueModule");

function apiRequestMiddle(req, res, next){
  let blueId = req.params.id;
  let path = req.params[0].split("/");
  BlueModule.getBlue(blueId).then(blue => {
    let validPath = BlueModule.validatePath(blue, path);
    if(validPath.valid){
      req.blue = validPath.blue;
      return next();
    } else {
      return res.status(401).send(validPath.err); //No err message yet
    }
  }).catch(err => {
    return res.status(401).send(err);
  })
}

module.exports = apiRequestMiddle;
