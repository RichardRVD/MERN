/* 
  Given two strings S and T containing only lowercase letters and "#" characters,
  return if they are equal when both are typed into empty text editors.
  
  # character means a backspace character.
  i.e., after processing the backspaces, are the two strings equal?
  Bonus: solve in O(n) time
*/

const S1 = "ad#c";
const T1 = "ad#c";
const expected1 = true;
// Explanation: Both S and T become "ac"

const S2 = "ac##";
const T2 = "c#a#";
const expected2 = true;
// Explanation: Both S and T become ""

const S3 = "a##c";
const T3 = "#a#c";
const expected3 = true;
// Explanation: Both S and T become "c"

const S4 = "a#c";
const T4 = "b";
const expected4 = false;
// Explanation: S becomes "c" while T becomes "b".

/**
 * Determines if the given strings are equal after the backspace characters
 * "#" are processed.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} S
 * @param {string} T
 * @returns {boolean} Whether the given strings are equal after backspaces
 *    have been processed.
 */
function backspaceStringCompare(S, T) {
    stack1 = stringToStack(S);
    stack2 = stringToStack(T);
    if( stack1.length !== stack2.length ){
        return false;
    }
    for( let i = 0; i < stack1.length; i++ ){
        if( stack1[i] !== stack2[i] ){
            return false;
        }
    }
    return true;
}
function stringToStack(str){
    returnStack = [];
    for(let i = 0; i < str.length; i++ ){
        if( str[i] === '#'){
            returnStack.pop();
        } else {
            returnStack.push(str[i]);
        }
    }
    return returnStack;
}
console.log(backspaceStringCompare(S1, T1));
/*****************************************************************************/

/* 
This was extracted from a react interview challenge. The items were to be
displayed in category groups.
Given an array of objects that contain a category key,
return a hash table to group the objects by their category.
Make the grouping case-insensitive.
Bonus: allow the key that is grouped by to be provided.
*/

const objects = [
    {
        name: "Baby Yoda",
        category: "cute",
    },
    {
        name: "Cricket Protein",
        category: "food",
    },
    {
        name: "Shibe",
        category: "Cute",
    },
    {
        name: "Ancient India",
        category: "Cradle of Civilization",
    },
    {
        name: "Wasp Crackers",
        category: "Food",
    },
    {
        name: "The Fertile Crescent",
        category: "Cradle of Civilization",
    },
];

const expected = {
    cute: [
        {
        name: "Baby Yoda",
        category: "cute",
        },
        {
        name: "Shibe",
        category: "Cute",
        },
    ],
    food: [
        {
        name: "Cricket Protein",
        category: "food",
        },
        {
        name: "Wasp Crackers",
        category: "Food",
        },
    ],
    "cradle of civilization": [
        {
        name: "Ancient India",
        category: "Cradle of Civilization",
        },
        {
        name: "The Fertile Crescent",
        category: "Cradle of Civilization",
        },
    ],
};

/**
 * Creates a hash table of case-insensitive categories mapped to the items
 * belonging to that category.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<Object>} items
 * @param {string} items.category
 * @returns {Object<string, Array<Object>>} The hash category hash table with
 *    string keys and array of objects as values.
 */
function groupObjects(items) {
    let newObject = {}
    for(let item of items){
        let cat = item.category.toLowerCase();
        if(cat in newObject){
            newObject[cat].push(item);
        } else {
            newObject[cat] = [item];
        }
    }
    return newObject;
}
console.log(groupObjects(objects))
/*****************************************************************************/