// Valid Anagram

// Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.

// An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

// Example 1:

// Input: s = "racecar", t = "carrace"

// Output: true

// Example 2:

// Input: s = "jar", t = "jam"

// Output: false

// Constraints:

//     s and t consist of lowercase English letters.


// const isAnagram = (s,t) => {
//     if(s.length != t.length){
//         return false
//     }
//     for(let i = 0; i < s.length; i++){

//     }
// }

// Versão paia
// const isAnagram = (s,t) => {
//      if(s.length != t.length){
//         return false
//     }
//     s = s.split('').sort().join('')
//     t = t.split('').sort().join('')

//     return s == t
// }

const isAnagram = (s,t) => {
    if (s.length !== t.length) {
        return false;
    }

    const charCount = {};

    for (let i = 0; i < s.length; i++) {
        charCount[s[i]] = (charCount[s[i]] || 0) + 1;
        charCount[t[i]] = (charCount[t[i]] || 0) - 1;
    }

    for (let count in charCount) {
        if (charCount[count] !== 0) {
            return false;
        }
    }

    return true;
}


// let s = 'jar'
// let t = 'jam'

    
let s = 'racecar'
let t = 'carrace'

console.log(isAnagram(s,t))

