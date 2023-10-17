/**
 * @param {number} n
 * @return {string[]}
 */

//arr of strings, starting from 1 to the number given of n
//will never be a neg num
//no deci nums
//no funny biz

//5 => ["1","2","Fizz","4","Buzz"]
//3 => ["1","2","Fizz"]

var fizzBuzz = function(n) {
    //arr to return at the end
    let arr = []
    //loop through n
    for(let i = 1; i <= n; i++){
        //if i % 3 && i % 5 => push "FizzBuzz"
        if(i % 3 === 0 && i % 5 === 0) {
            arr.push("FizzBuzz")
        } else if (i % 3 === 0){
            arr.push("Fizz")
        } else if (i % 5 === 0) {
            arr.push("Buzz")
        } else {
            arr.push(i.toString())
        }
        //else if i % 5 => push "Buzz"
        //else i     
    }
    
    return arr
};