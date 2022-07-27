//----------------------------------------------------------------
/**
 * @param {String} strs
 * @return {boolean}
 * @description
 * Given a String, determine if it is has unique characters.
 */
var isUnique = function (strs) {
	var hash = {};
	for (var i = 0; i < strs.length; i++) {
		if (hash[strs[i]]) return false;
		hash[strs[i]] = true;
	}
	return true;
};

isUnique('abcdefg');
