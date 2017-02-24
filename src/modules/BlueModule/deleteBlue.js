const db = require('../../connections/database/mongoConnect');

function deleteBlue(blueId){
  return db.blues.remove({_id: db.ObjectId(blueId)})
}

module.exports = deleteBlue;
