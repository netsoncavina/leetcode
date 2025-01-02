// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

 

// Constraints:

//     1 <= strs.length <= 200
//     0 <= strs[i].length <= 200
//     strs[i] consists of only lowercase English letters.

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let ans = ""
    strs.sort()
    let first = strs[0]
    let last = strs[strs.length - 1]
    for(let i = 0; i < first.length; i++){
        if (first[i] !== last[i]) break;
        ans += first[i]
    }

    return ans
};

strs = ["dog","racecar","car"]
console.log(longestCommonPrefix(strs))