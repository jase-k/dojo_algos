// Write a function that, given a sorted array and a value, determines whether the value is found within the array through recursively searching, and returns the index. Binary Search works by checking whether the value given is greater than or less than a midway point, which is why the given array must be sorted. 

// Also, even though there's only an array and value given, you can add additional parameters to your function.


// val = 9
// arr = [1,2,3,5,7,9,10 ,11,13,14,15,56,78]
var array = [ 1, 2, 3, 4, 5, 6, 7, 8]


// [1,2,3,5,7,9,10      |        11,13,14,15,56,78] <----- 9 is less than halfway so now you can search the left side only
// [1,2,3,5,       |        7,9,10] <------  9 is greater than halfway so you can search the right side only
// [7,      |       9,10] <------ depending on where you split,9 is greater than halfway
// [9,     |      10] <------ whittle down to 1 or 2 items to check and solve!


// function binarySearch(array, value, index=0, is_greater = 0){
//     if(value < array[0] || array[array.length-1] < value){
//         return false
//     }
    
//     if(is_greater == 0){
//         var index = Math.floor(array.length/2)
//     }
//     if(is_greater == 1){
//         index = Math.floor((index/2)+(index))
//     }
//     if(is_greater == 2){
//         index = Math.floor(index/2)
//     }
    
//     if(array[index] == value){
//         return index
//     }
//     else if(array[index] > value && array[index-1] < value ){
//         return false
//     }
//     else if(array[index] < value && array[index+1] > value ){
//         return false
//     }

//     if(array[index] < value){
//         return binarySearch(array, value, index, 1)
//     }
//     if(array[index] > value){
//         return binarySearch(array, value, index, 2)
//     }

// }
    
function binarySearch(array, value, counter=0){
    var halfway = Math.floor(array.length/2)
    // console.log(`Array: ${array}, Value: ${value}, Counter: ${counter}`)
    
    if(array[halfway] == value){
        return counter + halfway
    }

    if(array.length <= 2){
        if(array[halfway-1] != value && array[halfway] != value){
            return false
        }
        if(array[0] == value){
            return counter 
        }
        if(array[1] == value){
            return counter++
        }
    }

    if(array[halfway] > value){
        return binarySearch(array.slice(0, halfway+1), value, counter)
    }
    if(array[halfway] < value){
        counter += halfway
        return binarySearch(array.slice(halfway), value, counter) //slice the last half of array
    }

}
console.log(binarySearch(array, 2)) // 1
console.log(binarySearch([1, 2],  -2)) // false
console.log(binarySearch( [1, 2],  4)) // false
console.log(binarySearch( [1, 2],  1)) // 0
console.log(binarySearch([1,2,2,2,2,2,2,4,5,5,5,5,6,6,6], 2)) // 1-4
console.log(binarySearch([1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 8, 9, 10], 9.5)) // false
console.log(binarySearch([], 7)) //false

// [1, 2],  -2
// [1, 2],  4
// [1, 2],  1
// [1,2,2], 2
// [], 7
// [1,2,2,2,2,2,2,4,5,5,5,5,6,6,6], 2
// [1, 1, 1, 1, 1], 1
// [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 8, 9, 10], 8

// make sure to test all given scenarios!

// extra challenge: don't use built-in functions, with the exception of rounding functions (Math.floor(), Math.ceil())