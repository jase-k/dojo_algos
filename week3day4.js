// Write a function that given a sorted array of page numbers, return a string representing a book index. Combine consecutive pages to create ranges.

// Example: [1,3,4,5,7,8,10,12] --> "1, 3-5, 7-8, 10, 12"

// ============================
// Instructor's Solution
// ============================
/*
function bookIndex(arr){
    //your code here
    //iterate through the array
    for(var i = 0; i < arr.length; i++){
        //search for consecutive numbers
        if(arr[i]+1 == arr[i+1]){
            var j = 1 // marker to increase during the while loop

            while(arr[i]+j == arr[i+1]){
                //if consecutive numbers find starting and ending indexes. 
                var temp = arr[i+1] //4
                //erase indexes no longer needed
                arr.splice(i+1, 1)
                j++ // add to j to see if nth time through the loop is nth bigger than arr[i]
            }
            
            //Combine values with a '-' in between
            arr[i] = `${arr[i]}-${temp}`
        }
    }
    return arr.join(', ')
}
*/

function bookIndex(arr){
    //your code here
    //iterate through the array
    for(var i = 0; i < arr.length; i++){
        //search for consecutive numbers
        if(arr[i]+1 == arr[i+1]){
            var j = 1 // marker to increase during the while loop

            while(arr[i]+j == arr[i+1]){
                //if consecutive numbers find starting and ending indexes. 
                var temp = arr[i+1] //4
                //erase indexes no longer needed
                arr.splice(i+1, 1)
                j++ // add to j to see if nth time through the loop is nth bigger than arr[i]
            }
            
            //Combine values with a '-' in between
            arr[i] = `${arr[i]}-${temp}`
        }
    }
    return arr.join(', ')
}

console.log(bookIndex([1,3, 4, 5, 7, 8,10,12]))
console.log(bookIndex([1,2,3,4,5,6,7,8,9,10,11,12]))
console.log(bookIndex([1,3,4,5,7,8,10,12,100,101,102,104,105,106,107]))