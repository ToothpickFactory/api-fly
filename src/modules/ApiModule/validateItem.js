const checker = {
  "String": (value, key, props = {}) => {
    if(!value && !props._required){
      return {valid: true, value: props._default || null}
    }
    if(typeof value !== 'string'){
      return {valid: false, msg: `${key} must be a string`}
    }
    if(props._maxLength && value.length > props._maxLength){
      return {valid: false, msg: `${key} must be less than ${props._maxLength}`}
    }
    if(props._minLength && value.length < props._minLength){
      return {valid: false, msg: `${key} must be greater than ${props._maxLength}`}
    }

    return {valid: true, value}
  },
  "Number": (value, key, props = {}) => {
    if(!value && !props._required){
      return {valid: true, value: props._default || null}
    }
    if(typeof value !== 'number'){
      return {valid: false, msg: `${key} must be a number`}
    }
    return {valid: true, value}
  },
  "Date": (value, key, props = {}) => {
    if(!value && !props._required){
      if(props._default){
        if(props._default === "now") value = Date.now();
        else value = props._default;
      } else {
        value = null;
      }
      return {valid: true, value}
    }
    if((new Date(value)).getTime() < 1){
      return {valid: false, msg: `${key} must be a Date in milliseconds`}
    }
    return {valid: true, value}
  }
}


function validateItem(blue, item){
  let valid = true;
  let errMsg = [];
  let newItem = {};
  blue = blue._type === "List" ? blue._list : blue;

  for(let key in blue){
    if(key[0] !== "_") {
      let type, props, value;
      type = blue[key];
      value = item[key];

      if(type !== null && typeof type === 'object'){
        props = type;
        type = type._type;
      }

      let check = checker[type](value, key, props);
      if(check.valid){
        newItem[key] = check.value;
      } else {
        valid = false;
        errMsg.push(check.msg)
      }
    }
  }
  return valid ? {valid, item: newItem} : {valid, errMsg}
}

module.exports = validateItem;
