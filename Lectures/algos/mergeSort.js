/* 
    Stable sort.
    Visualization:
    https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/visualize/
    Time Complexity
        - Best case: O(n log(n)) linearithmic.
        - Average case: O(n log(n)) linearithmic.
        - Worst case: O(n log(n)) linearithmic.
    Space: O(n) linear
    steps:
        1. create a merge function to merge two already sorted arrays into a single
            sorted array.
        - you do NOT need to work in place, ok to use a new array

        2. create mergeSort function to sort the provided array
        - split the array in half and recursively merge the halves using the
            previously created merge function.
        - splitting of arrays stops when array can no longer be split.
        - an array of 1 item is by definition sorted, so two arrays of 1 item
            can therefore be merged into a sorted array.
*/

// merge
const sortedA1 = [];
const sortedB1 = [];
const expectedMerge1 = [];

const sortedA2 = [5];
const sortedB2 = [2];
const expectedMerge2 = [2, 5];

const sortedA3 = [3];
const sortedB3 = [2, 3, 4, 7];
const expectedMerge3 = [2, 3, 3, 4, 7];

/**
 * Efficiently merges two already sorted arrays into a new sorted array.
 * Do not mutate the given arrays.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} left
 * @param {Array<number>} right
 * @returns {Array<number>} A new sorted array containing all the elements of
 *    both given halves.
 */
function merge(left, right) {
    if (left.length == 0){ return right; }
    if (right.length == 0){ return left; }
    let newArr = []
    let i = 0;
    let j = 0; 
    while (i < left.length && j < right.length){
        if(left[i] < right[j]){
            newArr.push(left[i]);
            i++;
        } else {
            newArr.push(right[j]);
            j++;
        }
    }
    if (i == left.length){
        while (j<right.length){
            newArr.push(right[j]);
            j++;
        }
    } else {
        while ( i < left.length){
            newArr.push(left[i]);
            i++
        }
    }
    return newArr;
}
//Uses the .shift() method:
function merge1(left, right) {
    let newArr = []
    while (right.length && left.length){
        if(right[0] < left[0]){
            newArr.push(right.shift());
        } else {
            newArr.push(left.shift());
        }
    }
    return [...newArr, ...right, ...left]
}

/**
 * Creates a new sorted array based on the given nums being recursively split
 * and merged.
 * Best: O(n log(n)) linearithmic.
 * Avg: O(n log(n)) linearithmic.
 * Worst: O(n log(n)) linearithmic.
 * @param {Array<number>} nums
 * @returns {Array<number>} A New sorted array.
 */
function mergeSort(nums) {
    const split = Math.floor(nums.length / 2);
    if(nums.length < 2){
        return nums;
    }
    const left = nums.splice(0, split)
    return merge(mergeSort(left), mergeSort(nums));
}
function mergeSort1(nums) {
    const split = Math.floor(nums.length / 2);
    if(nums.length < 2){
        return nums;
    }
    const left = nums.splice(0, split)
    return merge1(mergeSort1(left), mergeSort1(nums));
}
console.log(mergeSort(expectedMerge3));
console.log(merge(sortedA2, sortedB2));
console.log(mergeSort([4,9,12,18,3,5,4,1,1,4,10,440]))
/*****************************************************************************/