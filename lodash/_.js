const _ = {
  clamp(num, low, upp) {
    return Math.min(Math.max(num, low), upp);
  },
  
  inRange(num, start, end) {
    if (end == null) {
      end = start;
      start = 0;
    }
    if (start > end){
      const temp = start;
      start = end;
      end = temp;
    }
    if (num > start && num < end){
      return true;
    }
    else return false;
  },
  
  words(str) {
    return str.split(" ");
  },
  
  pad(str, length) {
    if (str.length > length){
      return str;
    }
    const padStart = Math.floor((length - str.length) / 2);
    const padEnd = length - str.length - padStart;
    var space = ' ';
    var paddedString =`${space.repeat(padStart)}${str}${space.repeat(padEnd)}`;
    return paddedString;
  },
  
  has(object, key) {
    return object[key] != undefined;
  },
  
  invert(object) {
    var invertedObject = {};
    for (let key in object) {
      let originalValue = object[key];
      invertedObject[originalValue] = key;
    }
    return invertedObject;
  },
  
  findKey(object, predicate) {
    for (let key in object) {
      if (predicate(object[key])) {
        return key;
      }
    }
    return undefined;
  },
  
  drop(arr, num) {
    if (num == undefined){
      num = 1;
    }
    const newArr = arr.slice(num);
    return newArr;
  },
  
  dropWhile(arr, func) {
    var dropIndex;
    for (let i in arr) {
      if (!func(arr[i], i, arr)){
        dropIndex = i++;
        break;
      }
    }
    var newArr = [];
    for (let i = dropIndex; i < arr.length; i++) {
      newArr.push(arr[i]);
    }
    return newArr;
  },
  
  chunk(arr, size) {
    if (size == undefined){
      size = 1;
    }
    var newArr = [];
    var numArrays = Math.floor(arr.length / size);
    var currentIndex = 0;
    for (let i = 0; i < numArrays; i++) {
      	var newArrChunk = [];
      for (let j = 0; j < size; j++) {
        if (currentIndex > size) {
        	break;
        }
        newArrChunk.push(arr[currentIndex])
        currentIndex++;
      }
      newArr.push(newArrChunk);
    }
    return newArr;
  }
  
}



// Do not write or modify code below this line.
module.exports = _;