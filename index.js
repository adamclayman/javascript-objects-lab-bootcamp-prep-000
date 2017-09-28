var recipes = {
  cookie: ['eggs', 'flour', 'sugar']
};

function updateObjectWithKeyAndValue(obj, key, value) {
  var obj2;
  obj2[key] = value;
  return Object.assign(obj, obj2);
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value;
  return obj;
}

function deleteFromObjectByKey() {

}

function destructivelyDeleteFromObjectByKey(obj, key) {
  delete obj[key];
  return obj;
}
