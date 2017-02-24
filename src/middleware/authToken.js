var db = require('../connections/database/mongoConnect');

module.exports = function(req, res, next){
  db.users.findOne({token: req.headers.token}, { _id: 0 })
  .then(function(dRes){
    if(dRes){
      req.user = dRes;
      next();
    } else {
      res.sendStatus(401);
    }
  });
};
