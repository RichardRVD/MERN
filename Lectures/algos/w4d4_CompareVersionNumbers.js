// https://leetcode.com/problems/compare-version-numbers/

/*

Given two strings, version1, and version2, both representing version numbers
If version1 > version2 return 1; if version1 < version2 return -1; otherwise return 0.

Helpful methods:
    - .split(characterToSplitOn) - returns an array of items: "a-b-c".split("-") returns ["a", "b", "c"]
    - .parseInt - given a string, converts it to and returns int or NaN (Not a Number) if conversion fails

Bonus, solve without .split

*/

const test1V1 = "0.1";
const test1V2 = "1.1";

const expected1 = -1;

const test2V1 = "1.0.1";
const test2V2 = "1";
const expected2 = 1;

const test3V1 = "7.5.2.4";
const test3V2 = "7.5.3";
const expected3 = -1;

const test4V1 = "7.5.2.4";
const test4V2 = "7.5.2";
const expected4 = 1;

const test5V1 = "1.01";
const test5V2 = "1.001";
const expected5 = 0;
// Explanation: Ignoring leading zeroes, both “01” and “001" represent the same number “1”

const test6V1 = "1.0.1";
const test6V2 = "1";
const expected6 = 1;

/**
 * Determines which version number is greater or if they are equal.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} v1
 * @param {string} v2
 * @returns {number} 1 if v1 greater, -1 if v1 smaller, 0 if equal.
 */
function compareVersionNumbers(v1, v2) {
    let arr1 = v1.split(".").map(item => parseInt(item));
    let arr2 = v2.split(".").map(item => parseInt(item));
    
    if(arr1 > arr2){
        return 1;
    }
    if(arr2 > arr1){
        return -1;
    }
    if(arr1 == arr2){
        return 0;
    }
    // vnum stores each numeric
    // part of version
    // var vnum1 = 0, vnum2 = 0;
 
    // // loop until both string are
    // // processed
    // for (var i = 0, j = 0; (i < v1.length
    //                         || j < v2.length);) {
    //     // storing numeric part of
    //     // version 1 in vnum1
    //     while (i < v1.length && v1[i] != '.') {
    //         vnum1 = vnum1 * 10 + (v1[i] - '0');
    //         i++;
    //     }
 
    //     // storing numeric part of
    //     // version 2 in vnum2
    //     while (j < v2.length && v2[j] != '.') {
    //         vnum2 = vnum2 * 10 + (v2[j] - '0');
    //         j++;
    //     }
 
    //     if (vnum1 > vnum2)
    //         return 1;
    //     if (vnum2 > vnum1)
    //         return -1;
 
    //     // if equal, reset variables and
    //     // go for next numeric part
    //     vnum1 = vnum2 = 0;
    //     i++;
    //     j++;
    // }
    // return 0;

}
console.log(compareVersionNumbers(test1V1, test1V2));
console.log(compareVersionNumbers(test2V1, test2V2));
console.log(compareVersionNumbers(test3V1, test3V2));
console.log(compareVersionNumbers(test4V1, test4V2));
console.log(compareVersionNumbers(test5V1, test5V2));
console.log(compareVersionNumbers(test6V1, test6V2));
/*****************************************************************************/