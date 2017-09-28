var recipes = {
  cookie: ['eggs', 'flour', 'sugar']
};

function updateObjectWithKeyAndValue(obj, key, value) {
  obj2 = Object.assign(obj, obj2);
  return obj2;
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
