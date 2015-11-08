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
  var startMatch = str.match(start);
  var endMatch = str.match(end);

  if (startMatch === null) {
    return str;
  }

  var startSliceIndex = startMatch.index;
  var endSliceIndex = str.length;

  if (endMatch !== null) {
    endSliceIndex = endMatch.index + endMatch[0].length;
  }

  return cutSubstringByIndex(str, startSliceIndex, endSliceIndex);
}

function cutSubstringByIndex (str, start, end) {
  return str.slice(0, start) + str.slice(end);
}