/**
 * @param {number[]} nums
 * @return {number}
 */

//Add up all nums in the array and take that final value 
// Will return 1 if x is positive
// Will return -1 if x is negative
// Will return 0 if x is 0

//always be only integers in this arr
//no special characters
//no decimal nums
//no spaces

//nums as a param array of nums
var arraySign = function(nums) {
    //create variable to track count of negative nums in the arr
    let counter = 0
    //if nums include 0 return 0
    if(nums.includes(0)){
        return 0
    }
    
    //loop through array
    for(let i = 0; i < nums.length; i++) {
        //if element is less than 0 count variable ++
        if(nums[i] < 0){
            counter++
        }
    }
    
    //if count is even number than the solution is positive return 1
    if(counter % 2 === 0) {
        return 1
    } else {
        return -1
    }
    //if count is not even than the solution is negative return 1
};