var recipes = {
  cookie: ['eggs', 'flour', 'sugar']
};

function updateObjectWithKeyAndValue(obj, key, value) {
  var newObj = Object.assign(obj, {});
  newObj[key] = value;
  return newObj;
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value;
  return obj;
}

function deleteFromObjectByKey(obj, key) {
  newObj = Object.assign(obj);
  delete newObj[key];
  return newObj;
}

function destructivelyDeleteFromObjectByKey(obj, key) {
  delete obj[key];
  return obj;
}
