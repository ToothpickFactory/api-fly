const db = require('../../connections/database/mongoConnect');
const validateItem = require('./validateItem');


function postItem(blue, item, _blueId){
  let valItem = validateItem(blue, item);
  if(valItem.valid){
    let itemToInsert = Object.assign({}, valItem.item, {_blueId, _collection: blue._collection});
    return db.items.insert(itemToInsert)
  } else {
    return Promise.reject(valItem.errMsg)
  }
}

module.exports = postItem;
