//return all letters in the string
let googleQuest = (wordString) => {
	let wordArray = wordString.split('');
	hashWord = {};
	for (let i = 0; i < wordArray.length; i++) {
		hashWord[wordArray[i]] = i;
	}
	console.log(hashWord);
};

// googleQuest('goooooogole');

//--------------------------------------------------------------------------------------------------------------------

var googleQuest2 = (str) => {
  let result = '';
   for (let i = 0; i < str.length; i++) {
     if (str[i] !== str[i + 1]) {
         result = str[i];
		} else {
			  result = str[i];
        while (str[i] === str[i + 1]) {
          result += str[i];
          i++;
        }
			
     }
     console.log(result);
	}
};

googleQuest2('ggggoooogoogole');


