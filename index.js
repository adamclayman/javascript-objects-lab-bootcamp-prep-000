var recipes = {
  cookie: ['eggs', 'flour', 'sugar']
};

function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign(obj, {'key': value});
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
