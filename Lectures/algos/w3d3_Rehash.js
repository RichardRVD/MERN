/* 
* Given by Riot games.
* Rehashes an incorrectly hashed string by combining letter count occurrences
* and alphabetizing them.
*/

const str1 = "b70a164c32a20c10";
const expected1 = "a184b70c42";

/**
 * Rehashes an incorrectly hashed string by combining letter count occurrences
 * and alphabetizing them.
 * Time: O(?).
 * Space: O(?).
 * @param {string} s An incorrectly hashed string.
 * @returns {string} The correctly rehashed string alphabetized.
 */
function rehash(s) {
    let newArr = []
    let newDict = {}
    for(let i = 0; i < s.length; i++){ 
        s[i].split()
        newArr.push(s[i]);
        // console.log(newArr);
    }
    for(let j = 0; j < newArr.length; j++){
        if(isNaN([j])){
            Object.assign([j])
            console.log(Object.keys)
        }
    }
    return newArr;
}

console.log(rehash(str1))
/*****************************************************************************/