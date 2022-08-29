/* 
    https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/
    Stable sort
    
    Time Complexity
        - Best: O(n) linear when array is already sorted.
        - Average: O(n^2) quadratic.
        - Worst: O(n^2) quadratic when the array is reverse sorted.
    Space: O(1) constant.
    For review, create a function that uses BubbleSort to sort an unsorted array in-place.
    For every pair of adjacent indices, swap them if the item on the left is larger than the item on the right until array is fully sorted
*/

// const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
// const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
// const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Sorts the given nums in-place by mutating the array.
 * Best: O(n) linear when array is already sorted.
 * Average: O(n^2) quadratic.
 * Worst: O(n^2) quadratic when the array is reverse sorted.
 * @param {Array<number>} nums
 * @returns {Array<number>} The given nums after being sorted.
 */
const bubbleSort = (nums) => {
    //Code goes here
    let temp;
    let j = 0;
    while(j < nums.length - 1){
        for(var i = 0; i < nums.length - j - 1; i++){
            if(nums[i] > nums[i + 1]){
                temp = nums[i+1];
                nums[i+1] = nums[i];
                nums[i] = temp;
            }
        }
        j++;
    }
    return nums;
}

const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsRandomOrder1 = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8,9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const numsEmpty = [];
const numsSame = [2,2,2,2,2,2];
console.log(bubbleSort(numsRandomOrder));
console.log(bubbleSort(numsRandomOrder1));
console.log(bubbleSort(numsReversed));
console.log(bubbleSort(numsEmpty));
console.log(bubbleSort(numsSame));

/*****************************************************************************/