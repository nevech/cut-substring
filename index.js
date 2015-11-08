module.exports = function (str, start, end) {
  var end = end || str.length;

  if (typeof start === 'number') {
    return cutSubstringByIndex(str, start, end);
  }

  if (start instanceof RegExp) {
    return cutSubstringByRE(str, start, end);
  }

  throw new Error('Option `start` should be number or RegExp');
}

function cutSubstringByRE (str, start, end) {

}

function cutSubstringByIndex (str, start, end) {
  return str.slice(0, start) + str.slice(end);
}