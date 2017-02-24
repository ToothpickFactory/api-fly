const db = require('../../connections/database/mongoConnect');

function getItem(_blueId, _collection, _id){
  return db.items.findOne({_blueId, _collection, _id: db.ObjectId(_id)})
}

module.exports = getItem;
