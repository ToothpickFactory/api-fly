const db = require('../../connections/database/mongoConnect');

function getBlue(blueId){
  return db.blues.findOne({_id: db.ObjectId(blueId)}).then(blue => {
    return blue ? blue : Promise.reject("Blue Print does not exist");
  })
}

module.exports = getBlue;
