var AuthModule = require("../modules/auth");

function authSoft(req, res, next){

  let token = req.headers.token;

  if(token){
    AuthModule.userByToken(token)
      .then(user => {
        req.user = user;
        next();
      })
      .catch(err => {
        next();
      });
  } else {
    next();
  }
  
}

module.exports = authSoft;
