/*

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Ex:1
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

*/
// const numbersArray = [2,7,11,15]
// const targetNumber = 22

// const numbersArray = [3, 3]
// const targetNumber = 6

// const numbersArray = [1, 20, 4, 3, 3]

// const targetNumber = 6


const numbersArray = [3, 2, 3]

const targetNumber = 6

const twoSum = (nums, target) => {

    let y = 0
    let thing = [0, 0]
    let index1 = 0
    let index2 = 0
    
    const looper = () => {
        let answerIsPossible = nums.findIndex(x => x + nums[y] == target)
        if (answerIsPossible == -1) {
            console.log(`is has made it here`)
            y = y + 1
            looper()
        } else  if ( nums[y] + nums[y] == target){
            if (nums[y] == nums[y + 1]) {
                index1 = nums.findIndex(x => x + nums[y] == target)
                index2 = nums.findIndex(x => x + nums[y + 1] == target)
                thing = [index1, index2 + 1]
            } else {
                y = y + 1
                looper()
            }
        } else {    
            nums.findIndex(x => {
                if (x + nums[y] == target) {
                    let z = x
                    index1 = nums.findIndex(x => x + z == target)
                    index2 = nums.findIndex(x => x + nums[y] == target)
                    thing = [index1, index2]
                }
                x + nums[y] == target
            })
        }
    }
    looper()
    return(thing)
    
}

const yeah = twoSum(numbersArray, targetNumber)

console.log(yeah)


