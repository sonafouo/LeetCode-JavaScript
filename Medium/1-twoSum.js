/**
 * key: Use object in JavaScript for hashmap. track target - nums[i] at position i
 * O(N)
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
	var numsMap = {};
	var results = [];
	for (var i = 0; i < nums.length; i++) {
		if (target - nums[i] in numsMap) {
			results[1] = i;
			results[0] = numsMap[target - nums[i]];
			return results;
		}
		numsMap[nums[i]] = i;
	}

	return results;
};

//--------------------------------------------------------------------------------------------------------------------
/** 
 * Given an array of integers nums and an integer target , return indices of the two
numbers such that they add up to target. You may assume that each input would
have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

  * @param {number[]} nums
  * @param {number} target
  * @return {number[]}
  * @link https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
  * 
  */

let getTwoSum = (nums, target) => {
	let Hashmap = {};
	for (let i = 0; i < nums.length; i++) {
		let complement = target - nums[i];
		if (nums.includes(complement) === true) {
			Hashmap[nums.indexOf(complement)] = i;
		}
	}
	console.log(Hashmap);
	return Object.keys(Hashmap);
};
getTwoSum([2, 7, 11, 15], 9);
