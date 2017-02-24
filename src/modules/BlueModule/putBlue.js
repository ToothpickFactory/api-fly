const db = require('../../connections/database/mongoConnect');

function putBlue(blueId, updateObj){
  return db.blues.update(
    { _id: db.ObjectId(blueId) },
    { $set: updateObj }
  )
}

module.exports = putBlue;
