const db = require('../../connections/database/mongoConnect');

function postBlue(blue){
  return db.blues.insert(blue)
    .catch(err => console.log(err))
}

module.exports = postBlue;
