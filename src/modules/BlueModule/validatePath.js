const objectIdisValid = require('valid-objectid').isValid;

function validatePath(blue, paths, index = 0){
  let key = paths[index];
  let nextblue = blue[key];
  let newIndex = index + 1;
  return paths[newIndex] && !objectIdisValid(paths[newIndex]) ?
    validatePath(nextblue, paths, newIndex) :
    {"valid": true, "blue": Object.assign({}, nextblue, {_collection: key} )};
}

module.exports = validatePath;
