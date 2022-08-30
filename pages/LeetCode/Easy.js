/*

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Ex:1
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

*/
// const numbersArray = [3, 2, 6, 3, 2, 2, 3, 7]
// const targetNumber = 9

// const numbersArray = [3, 2, 3]

const numbersArray = [0,4,0,5,0]
const targetNumber = 0

// const numbersArray = [2,5,5,11]
// const targetNumber = 10
// [2,5,5,11]
// 10

// Output
// [0,0]
// Expected
// [0,3]


const twoSum = (nums, target) => {

    let y = 0
    let thing = []
    let index1 = 0
    let index2 = 0

    // handle zero target
    if (target == 0) { 
        index1 = nums.findIndex(x => x + nums[y] == target)
        let xy1 = [...nums]
        let splicedArray1 = xy1.splice(index1 + 1)
        let lengthDiff1 = nums.length - splicedArray1.length
        let indexOfSpliceArrayWhoseValueIsTheSameAsIndex21 = splicedArray1.findIndex(x => x + nums[index1] == target)
        // console.log(indexOfSpliceArrayWhoseValueIsTheSameAsIndex21)
            index2 = splicedArray1.indexOf(nums[y]) + lengthDiff1
        thing = [index1, index2]
    } else {

        const looper = () => {



            console.log(nums.findIndex(x => x + nums[y] == target))
            // account for zero





            let answerIsPossible = nums.findIndex(x => x + nums[y] == target)
            if (answerIsPossible == -1) {
                y = y + 1
                looper()
            } else  if ( nums[y] + nums[y] == target){ // if the value adds up with itself into target
                    index1 = nums.findIndex(x => x + nums[y] == target)
                    if (nums[y] == nums[y + 1]) { // if the values are beside each other :: WORKS PERFECTLY
                        index2 = nums.findIndex(x => x + nums[y + 1] == target)
                        thing = [index1, index2 + 1]
                    } else { // if the array contains a number which when the target is divided by equals zero
                        index1 = nums.findIndex(x => x + nums[y] == target)
                        let xy = [...nums]
                        let splicedArray = xy.splice(index1 + 1)
                        let lengthDiff = nums.length - splicedArray.length
                        let indexOfSpliceArrayWhoseValueIsTheSameAsIndex2 = splicedArray.findIndex(x => x + nums[index1] == target)
                        if (indexOfSpliceArrayWhoseValueIsTheSameAsIndex2 -1) {
                            y = y + 1
                            looper()
                        } else {
                            index2 = splicedArray.indexOf(nums[y]) + lengthDiff
                        }
                        thing = [index1, index2]
                }
            } else { // if the value adds up into itself and is possible
                nums.findIndex(x => {
                    if (x + nums[y] == target) {
                        let z = x
                        index1 = nums.findIndex(x => x + z == target)
                        index2 = nums.findIndex(x => x + nums[y] == target)
                        thing = [index1, index2]
                        // console.log(`thing is ${thing}`)
                    }
                    x + nums[y] == target
                })
            }
        }
        looper()
    }
    return(thing)
    
    
}

const yeah = twoSum(numbersArray, targetNumber)

console.log(yeah)


