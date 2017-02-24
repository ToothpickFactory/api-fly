const db = require('../../connections/database/mongoConnect');

function getBlues(){
  return db.blues.find({}, {_id: 1});
}

module.exports = getBlues;
