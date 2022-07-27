var stringCompress = function(str) {
  var result = '';
  var count = 1;
  for (var i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      result += str[i] + count;
      count = 1;
    }
  }
  return result.length < str.length ? result : str;
}



//--------------------------------------------------------------------------------------------------------------------
var stringCompress2 = function (str) {
  let hashWord = {};
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (hashWord[str[i]]) {
      hashWord[str[i]]++;
    } else {
      hashWord[str[i]] = 1;
    }
  }
  console.log(hashWord);
  for (let key in hashWord) {
    result += key + hashWord[key];
  }
  console.log(result);
  return result.length < str.length ? result : str;
}

stringCompress2('aabcccccaaaaaaabbbbbbb');
 

//--------------------------------------------------------------------------------------------------------------------
var stringCompress3 = function (str) { 
  let result = '';
  let count = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[i + 1]) {
      result += str[i]
    } else {
      while (str[i] === str[i + 1]) {
        count++;
        i++;
      }
      result += str[i] + count;
      count = 1;
    }
  }
  console.log(result);
  return result.length < str.length ? result : str;
}

stringCompress3('aabcccccaaaaaaabbbbbbb');