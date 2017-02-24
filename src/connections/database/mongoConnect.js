const pmongo      = require('promised-mongo');
const config      = require('config');

var db = pmongo(config.mongo.db, [
  'recipes'
]);

module.exports = db;
